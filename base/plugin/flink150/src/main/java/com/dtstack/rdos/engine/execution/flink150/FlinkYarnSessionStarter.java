package com.dtstack.rdos.engine.execution.flink150;

import com.dtstack.rdos.engine.execution.base.JobClient;
import com.dtstack.rdos.engine.execution.flink150.util.FLinkConfUtil;
import org.apache.flink.client.deployment.ClusterSpecification;
import org.apache.flink.client.program.ClusterClient;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.configuration.IllegalConfigurationException;
import org.apache.flink.util.FlinkException;
import org.apache.flink.util.StringUtils;
import org.apache.flink.yarn.AbstractYarnClusterDescriptor;
import org.apache.hadoop.yarn.api.records.ApplicationId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;

/**
 * company: www.dtstack.com
 * author: toutian
 * create: 2019/5/30
 */
public class FlinkYarnSessionStarter {

    private static final Logger logger = LoggerFactory.getLogger(FlinkClient.class);

    public static final String FLINK_CONF_FILENAME = "flink-conf.yaml";

    private AbstractYarnClusterDescriptor yarnSessionDescriptor;
    private ClusterSpecification yarnSessionSpecification;
    private ClusterClient<ApplicationId> clusterClient;

    public FlinkYarnSessionStarter(FlinkClientBuilder flinkClientBuilder, FlinkConfig flinkConfig, FlinkPrometheusGatewayConfig metricConfig) throws MalformedURLException {
        JobClient jobClient = new JobClient();
        jobClient.setTaskId("default");

        Configuration configuration = loadConfiguration(flinkConfig.getFlinkJarPath());

        yarnSessionDescriptor = flinkClientBuilder.createClusterDescriptorByMode(configuration, flinkConfig, metricConfig, jobClient, false);
        yarnSessionDescriptor.setName(flinkConfig.getFlinkSessionName());
        yarnSessionSpecification = FLinkConfUtil.createYarnSessionSpecification(flinkClientBuilder.getFlinkConfiguration());
    }

    public void startFlinkYarnSession() {
        try {
            clusterClient = yarnSessionDescriptor.deploySessionCluster(yarnSessionSpecification);
            clusterClient.setDetached(true);
        } catch (FlinkException e) {
            logger.info("Couldn't deploy Yarn session cluster", e.getMessage());
            throw new RuntimeException("Couldn't deploy Yarn session cluster" + e.getMessage());
        }
    }

    public void stopFlinkYarnSession() {
        try {
            clusterClient.shutdown();
        } catch (Exception ex) {
            logger.info("Could not properly shutdown cluster client.", ex);
        }
    }

    public ClusterClient<ApplicationId> getClusterClient() {
        return clusterClient;
    }


    private Configuration loadConfiguration(final String configDir) {
        File yamlConfigFile = null;
        try {
            if (StringUtils.isNullOrWhitespaceOnly(configDir)) {
                throw new IllegalArgumentException("Given configuration directory is null, cannot load configuration");
            }

            final File confDirFile = new File(configDir + "../conf");
            if (!(confDirFile.exists())) {
                throw new IllegalConfigurationException(
                        "The given configuration directory name '" + configDir +
                                "' (" + confDirFile.getAbsolutePath() + ") does not describe an existing directory.");
            }

            // get Flink yaml configuration file
            yamlConfigFile = new File(confDirFile, FLINK_CONF_FILENAME);

            if (!yamlConfigFile.exists()) {
                throw new IllegalConfigurationException(
                        "The Flink config file '" + yamlConfigFile +
                                "' (" + confDirFile.getAbsolutePath() + ") does not exist.");
            }
        } catch (Exception e) {
            logger.error("{}", e);
            System.exit(-1);
        }
        return loadYAMLResource(yamlConfigFile);
    }

    private Configuration loadYAMLResource(File file) {
        final Configuration config = new Configuration();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file)))) {

            String line;
            int lineNo = 0;
            while ((line = reader.readLine()) != null) {
                lineNo++;
                // 1. check for comments
                String[] comments = line.split("#", 2);
                String conf = comments[0].trim();

                // 2. get key and value
                if (conf.length() > 0) {
                    String[] kv = conf.split(": ", 2);

                    // skip line with no valid key-value pair
                    if (kv.length == 1) {
                        logger.warn("Error while trying to split key and value in configuration file " + file + ":" + lineNo + ": \"" + line + "\"");
                        continue;
                    }

                    String key = kv[0].trim();
                    String value = kv[1].trim();

                    // sanity check
                    if (key.length() == 0 || value.length() == 0) {
                        logger.warn("Error after splitting key and value in configuration file " + file + ":" + lineNo + ": \"" + line + "\"");
                        continue;
                    }

                    logger.info("Loading configuration property: {}, {}", key, value);
                    config.setString(key, value);
                }
            }
        } catch (IOException e) {
            throw new RuntimeException("Error parsing YAML configuration.", e);
        }

        return config;
    }

}

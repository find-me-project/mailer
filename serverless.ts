import type { AWS } from '@serverless/typescript';
import { functions } from '@functions/config';
import { config } from 'dotenv';

config();

const serverlessConfiguration: AWS = {
  service: 'mailer',
  useDotenv: true,
  frameworkVersion: '3',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
      packager: 'yarn',
    },
  },
  package: {
    individually: true,
    // exclude: ['**/*'],
  },
  plugins: ['serverless-webpack', 'serverless-offline', 'serverless-dotenv-plugin'],
  provider: {
    name: process.env.PROJECT_AWS_PROVIDER as any,
    region: process.env.PROJECT_AWS_REGION as any,
    stage: process.env.PROJECT_STAGE,
    runtime: 'nodejs14.x',
    memorySize: 512,
  },
  functions: functions,
};

module.exports = serverlessConfiguration;

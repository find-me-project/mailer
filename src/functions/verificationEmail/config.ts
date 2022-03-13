import { config } from 'dotenv';

config();

export const verificationEmail = {
  name: 'verificationEmail',
  handler: 'index.verificationEmail',
  events: [
    {
      sns: process.env.AWS_TOPIC_ARN_VERIFICATION_EMAIL as string,
    },
  ],
  memorySize: 256,
};

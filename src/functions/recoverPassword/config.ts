import { config } from 'dotenv';

config();

export const recoverPassword = {
  name: 'recoverPassword',
  handler: 'index.recoverPassword',
  events: [
    {
      sns: process.env.AWS_TOPIC_ARN_RECOVER_PASSWORD as string,
    },
  ],
  memorySize: 256,
};

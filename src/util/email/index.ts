import { config } from 'dotenv';
import { SES } from 'aws-sdk';

config();

export default async function sendEmail (userEmail: string, subject: string, html: string): Promise<any> {
  const {
    PROJECT_AWS_REGION,
    AWS_SES_EMAIL,
  } = process.env;

  const ses = new SES({ region: PROJECT_AWS_REGION });

  return ses.sendEmail({
    Destination: {
      ToAddresses: [userEmail],
    },
    Message: {
      Body: {
        Html: { Data: html },
      },
      Subject: { Data: subject },
    },
    Source: AWS_SES_EMAIL,
  }).promise();
}

import sendEmail from '@util/email';
import type { Handler } from 'aws-lambda';
import recoverPasswordEmailTemplate from './template/recover-password-email';

const EMAIL_TITLE = 'Email de recuperação de senha';
const EMAIL_SUBJECT = 'Recuperação de senha';

export const recoverPassword: Handler = async (event, _context, callback) => {
  const { email, code } = JSON.parse(event.Records[0].Sns.Message);

  await sendEmail(email, EMAIL_SUBJECT, recoverPasswordEmailTemplate({
    email: email,
    code: code,
    title: EMAIL_TITLE,
  }));

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
    }),
  });
};

import sendEmail from '@util/email';
import type { Handler } from 'aws-lambda';
import verificationEmailTemplate from './template/verification-email';

const EMAIL_TITLE = 'Verificação de e-mail';
const EMAIL_SUBJECT = 'Confirmação de e-mail';

export const verificationEmail: Handler = async (event, _context, callback) => {
  const data = event.body;

  await sendEmail('', EMAIL_SUBJECT, verificationEmailTemplate({
    email: '',
    activationCode: '',
    nickname: '',
    title: EMAIL_TITLE,
  }, data));

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
    }),
  });
};

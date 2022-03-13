import sendEmail from '@util/email';
import type { Handler } from 'aws-lambda';
import verificationEmailTemplate from './template/verification-email';

const EMAIL_TITLE = 'Verificação de e-mail';
const EMAIL_SUBJECT = 'Confirmação de e-mail';

export const verificationEmail: Handler = async (event, _context, callback) => {
  const { nickname, email, code } = JSON.parse(event.Records[0].Sns.Message);

  await sendEmail(email, EMAIL_SUBJECT, verificationEmailTemplate({
    email: email,
    activationCode: code,
    nickname: nickname,
    title: EMAIL_TITLE,
  }));

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
    }),
  });
};

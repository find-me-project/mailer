type EmailData = {
  email: string,
  title: string,
  nickname: string,
  activationCode: string,
}

export default function verificationEmailTemplate (data: EmailData): string {
  return (`
    <span>
      ${data.activationCode}
    </span>
  `);
}

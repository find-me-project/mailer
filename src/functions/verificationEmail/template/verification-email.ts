type EmailData = {
  email: string,
  title: string,
  nickname: string,
  code: string,
}

export default function verificationEmailTemplate (data: EmailData): string {
  return (`
    <span>
      ${data.code}
    </span>
  `);
}

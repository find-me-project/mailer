type EmailData = {
  email: string,
  title: string,
  nickname: string,
  activationCode: string,
}

export default function verificationEmailTemplate (data: EmailData, bla: any): string {
  return (`
    <span>
      ${data.activationCode}

      <span>
        ${bla}
      </span>
    </span>
  `);
}

type EmailData = {
  email: string,
  title: string,
  code: string,
}

export default function recoverPasswordEmailTemplate (data: EmailData): string {
  return (`
    <span>
      ${data.code}
    </span>
  `);
}

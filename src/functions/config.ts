import { recoverPassword } from './recoverPassword/config';
import { verificationEmail } from './verificationEmail/config';

export const functions = {
  verificationEmail: verificationEmail,
  recoverPassword: recoverPassword,
};

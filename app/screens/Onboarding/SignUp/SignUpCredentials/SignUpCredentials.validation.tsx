import * as yup from 'yup';

import { REGEXPS } from '../../../../utils/regexps';

export const SignUpCredentioalsValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Incorrect email address')
    .max(
      30,
      ({ max }) => `Email address must contain no more than ${max} characters`,
    )
    .required('Please enter an email address'),
  password: yup
    .string()
    .matches(REGEXPS.UPPERCASE, 'Password must include capital letter')
    .matches(REGEXPS.LOWERCASE, 'Password must include lowercase letter')
    .matches(REGEXPS.NUMBER, 'Password must include number')
    .min(8, ({ min }) => `Password must contain at least ${min} characters`)
    .max(
      30,
      ({ max }) => `Password must contain no more than ${max} characters`,
    )
    .required('Please enter a password'),
});

import * as yup from 'yup';

import { REGEXPS } from '../../../../utils/regexps';

export const SignUpCredentioalsValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Incorrect email')
    .required('Please enter this fild'),
  password: yup
    .string()
    .matches(REGEXPS.UPPERCASE, 'Password must include UPPERCASE')
    .matches(REGEXPS.LOWERCASE, 'Password must include LOWERCASE')
    .matches(REGEXPS.NUMBER, 'Password must include NUMBER')
    .min(8, ({ min }) => `Password must contain at least ${min} characters`)
    .required('Please enter this fild'),
});

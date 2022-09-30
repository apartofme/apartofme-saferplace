import * as yup from 'yup';

import { REGEXPS } from '../../../../utils/regexps';

export const SignUpCredentioalsValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(REGEXPS.UPPERCASE)
    .matches(REGEXPS.LOWERCASE)
    .matches(REGEXPS.NUMBER)
    .min(8)
    .required(),
});

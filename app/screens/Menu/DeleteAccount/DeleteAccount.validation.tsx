import * as yup from 'yup';

import { REGEXPS } from '../../../utils/regexps';

export const DeleteAccountValidationSchema = yup.object().shape({
  password: yup
    .string()
    .matches(REGEXPS.UPPERCASE, 'Password must include UPPERCASE')
    .matches(REGEXPS.LOWERCASE, 'Password must include LOWERCASE')
    .matches(REGEXPS.NUMBER, 'Password must include NUMBER')
    .min(8, ({ min }) => `Password must somebe ${min} characters`)
    .required('Please enter this fild'),
});
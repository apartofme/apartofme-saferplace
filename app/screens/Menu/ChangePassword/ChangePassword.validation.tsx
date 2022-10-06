import * as yup from 'yup';

import { REGEXPS } from '../../../utils/regexps';

export const ChangePasswordValidationSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .matches(REGEXPS.UPPERCASE, 'Password must include UPPERCASE')
    .matches(REGEXPS.LOWERCASE, 'Password must include LOWERCASE')
    .matches(REGEXPS.NUMBER, 'Password must include NUMBER')
    .min(8, ({ min }) => `Password must somebe ${min} characters`)
    .required('Please enter this fild'),
  newPassword: yup
    .string()
    .matches(REGEXPS.UPPERCASE, 'Password must include UPPERCASE')
    .matches(REGEXPS.LOWERCASE, 'Password must include LOWERCASE')
    .matches(REGEXPS.NUMBER, 'Password must include NUMBER')
    .min(8, ({ min }) => `Password must somebe ${min} characters`)
    .required('Please enter this fild'),
  confirmNewPassword: yup
    .string()
    .matches(REGEXPS.UPPERCASE, 'Password must include UPPERCASE')
    .matches(REGEXPS.LOWERCASE, 'Password must include LOWERCASE')
    .matches(REGEXPS.NUMBER, 'Password must include NUMBER')
    .min(8, ({ min }) => `Password must somebe ${min} characters`)
    .oneOf([yup.ref('newPassword')], 'Both passwords need to be the same')
    .required('Please enter this fild'),
});

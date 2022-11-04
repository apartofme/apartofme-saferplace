import * as yup from 'yup';

export const ChangePasswordValidationSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6, 'errors.auth.password_length')
    .required('erorrs.auth.required_field'),
  newPassword: yup
    .string()
    .min(6, 'errors.auth.password_length')
    .required('erorrs.auth.required_field'),
  confirmNewPassword: yup
    .string()
    .min(6, 'errors.auth.password_length')
    .oneOf([yup.ref('newPassword')])
    .required('erorrs.auth.required_field'),
});

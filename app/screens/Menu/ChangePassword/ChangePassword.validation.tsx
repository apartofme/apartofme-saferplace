import * as yup from 'yup';

export const ChangePasswordValidationSchema = yup.object().shape({
  currentPassword: yup.string().min(6).required(),
  newPassword: yup.string().min(6).required(),
  confirmNewPassword: yup
    .string()
    .min(6)
    .oneOf([yup.ref('newPassword')])
    .required(),
});

import * as yup from 'yup';

export const ForgotPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('errors.auth.invalid_email')
    .required('erorrs.auth.required_field'),
});

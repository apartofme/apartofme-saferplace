import * as yup from 'yup';

export const SignInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('errors.auth.invalid_email')
    .required('erorrs.auth.required_field'),
  password: yup
    .string()
    .min(6, 'errors.auth.password_length')
    .required('erorrs.auth.required_field'),
});

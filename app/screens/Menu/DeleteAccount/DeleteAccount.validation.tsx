import * as yup from 'yup';

export const DeleteAccountValidationSchema = yup.object().shape({
  password: yup.string().min(6).required(),
});

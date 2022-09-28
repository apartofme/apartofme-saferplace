import * as yup from 'yup';

export const SignUpNicknameValidationSchema = yup.object().shape({
  nickname: yup.string().min(2).max(20).required(),
});

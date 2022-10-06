import * as yup from 'yup';

export const SignUpNicknameValidationSchema = yup.object().shape({
  nickname: yup
    .string()
    .min(2, ({ min }) => `Nickname must contain at least ${min} characters`)
    .max(
      20,
      ({ max }) => `Password must contain no more than ${max} characters`,
    )
    .required(),
});

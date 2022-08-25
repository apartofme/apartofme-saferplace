import { TextInputProps } from 'react-native';

export enum ExtendedTextInputType {
  Default = 'default',
  Numeric = 'numeric',
  Email = 'email',
  Password = 'password',
  PasswordToggle = 'password-toggle',
}

export const BASE_PROPS: TextInputProps = {};

export const ExtendedTextInputPresetProps: Record<
  ExtendedTextInputType,
  TextInputProps
> = {
  [ExtendedTextInputType.Default]: BASE_PROPS,
  [ExtendedTextInputType.Email]: {
    ...BASE_PROPS,
    keyboardType: 'email-address',
  },
  [ExtendedTextInputType.Numeric]: {
    ...BASE_PROPS,
    keyboardType: 'numeric',
  },
  [ExtendedTextInputType.Password]: {
    ...BASE_PROPS,
    secureTextEntry: true,
  },
  // PasswordToggle component is configuring secureTextEntry by itself
  [ExtendedTextInputType.PasswordToggle]: BASE_PROPS,
};

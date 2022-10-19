import { DatoCMSTextVariables } from '../constants/quest';

export const REGEXPS = {
  FIRST_PLAYER: new RegExp(DatoCMSTextVariables.FirstPlayer),
  LOWERCASE: /[a-z]/,
  NUMBER: /\d/,
  SECOND_PLAYER: new RegExp(DatoCMSTextVariables.SecondPlayer),
  UPPERCASE: /[A-Z]/,
};

import { FIRST_PLAYER, SECOND_PLAYER } from '../constants/quest';

export const REGEXPS = {
  FIRST_PLAYER: new RegExp(FIRST_PLAYER),
  LOWERCASE: /[a-z]/,
  NUMBER: /\d/,
  SECOND_PLAYER: new RegExp(SECOND_PLAYER),
  UPPERCASE: /[A-Z]/,
};

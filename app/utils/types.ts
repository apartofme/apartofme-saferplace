export interface ISpeech {
  textKey: string;
}

export enum NicknameType {
  Child = 'child',
  Parent = 'parent',
}

export interface IParseTextWithNicknameResult {
  nicknameType: NicknameType;
  textArray: string[];
}

export interface ITranslations {
  text: string;
  label: string;
}

export interface ISpeech {
  textKey: string;
}

export enum NicknameType {
  Child = 'child',
  Parent = 'parent',
}

export interface ITranslations {
  text: string;
  label: string;
}

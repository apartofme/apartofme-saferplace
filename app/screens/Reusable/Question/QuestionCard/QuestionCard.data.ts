export interface IQuestionCard {
  id: string;
  titleKey: string;
}

export const QUESTION_CARD: ReadonlyArray<IQuestionCard> = [
  {
    id: '1',
    titleKey: 'screens.question_choice.first',
  },
  {
    id: '2',
    titleKey: 'screens.question_choice.second',
  },
  {
    id: '3',
    titleKey: 'screens.question_choice.third',
  },
  {
    id: '4',
    titleKey: 'screens.question_choice.fourth',
  },
  {
    id: '5',
    titleKey: 'screens.question_choice.fifth',
  },
];

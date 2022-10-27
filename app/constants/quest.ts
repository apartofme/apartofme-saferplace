import { SVG } from '../assets/svg';
import { IInstructionItem } from '../screens';

export const THE_CHARM_OF_BEFRIENDING_ID = '55602872';
export const JOINT_GROUNDING_EXERCISE_ID = '55785050';
export const THE_CHARM_OF_THE_MIRROR_ID = '55602854';
export const TRY_SOMETHING_NEW_PART_ONE_ID = '55602834';

export enum DatoCMSTextVariables {
  FirstPlayer = 'firstPlayer',
  SecondPlayer = 'secondPlayer',
  GrownUp = 'grown_up',
  Child = 'child',
  TroublesomeSpiritQuestion = 'troublesomeSpiritQuestion',
  PlayerEmotion = 'playerEmotion',
  TrySomethingFirstTitle = 'trySomethingFirstTitle',
  TrySomethingFirstDescription = 'trySomethingFirstDescription',
  TrySomethingSecondTitle = 'trySomethingSecondTitle',
  TrySomethingSecondDescription = 'trySomethingSecondDescription',
  KindnessInput = 'kindnessInput',
}

export const INSTRUCTION_LIST: ReadonlyArray<IInstructionItem> = [
  {
    titleKey: 'screens.parent_grounding_exercise.instruction.first',
    image: SVG.QuietPlaceIcon,
  },
  {
    titleKey: 'screens.parent_grounding_exercise.instruction.second',
    image: SVG.BarefootIcon,
  },
  {
    titleKey: 'screens.parent_grounding_exercise.instruction.third',
    image: SVG.StandingUpIcon,
  },
];

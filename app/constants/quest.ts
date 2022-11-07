import { SVG } from '../assets/svg';
import { IInstructionItem } from '../screens';

export const THE_CHARM_OF_BEFRIENDING_ID = '55602872';
export const JOINT_GROUNDING_EXERCISE_ID = '55785050';
export const THE_CHARM_OF_THE_MIRROR_ID = '55602854';
export const TRY_SOMETHING_NEW_PART_ONE_ID = '55602834';
export const DAY_13_CLOSING_DIALOGUE_ID = '55602873';
export const DAY_14_CLOSING_DIALOGUE_ID = '55602887';
export const THE_CHARM_OF_WEAVING_ID = '55602886';
export const THE_CHARM_OF_ACCEPTANCE_ID = '55602851';
export const THE_CHARM_OF_KINDNESS_ID = '55602844';

export const PLANTS_CHARM_IDS = [
  '55602820', // FTUE - Compassion Exercises
  '55712796', // FTUE Calm Charms
  '55602833', // FTUE Courage Exercises
];

export const PLANTS_CHARM_NEXT_QUEST_LINE_IDS = [
  '55602822', // Healing Hand - The Charm of Healing
  '55602825', // The Dancing Charm
  '55602834', // The Charm of Discovery Part One
];

export const PRE_CHARM_DAILY_CHECK_IN = 'Pre Charm Daily Check In';
export const POST_CHARM_CHECK_IN = 'Post Charm Check In';
export const CHARM_ENDED = 'Charm Ended';
export const ILLUSTRATION_ICON = 'IllustrationIcon';
export const APP_FEEDBACK = 'App Feedback';
export const SKIP_CHARM_FEEDBACK = 'Skip Charm Feedback';

export const OPEN_DIALOG_IDS = [
  55785563, // Introduction to the Garden Narrative
  55602818, // Day 2 - Opening Dialogue
  55602824, // Day 3 - Opening Narrative
  55602827, // Day 4 - Opening Narrative
  55602830, // Day 5 - Opening Narrative
  55648559, // Day 6 Opening - dialogue
  55602843, // Day 7 Opening Dialogue
  55602849, // Day 8 - Opening dialogue
  55602853, // Day 9 - Opening Dialogue
  55602856, // Day 10 - Opening Dialogue
  55602862, // Day 11 - Opening Dialogue
  55602869, // Day 12 - Opening dialogue
  55602871, // Day 13 - Opening dialogue
  55602874, // Day 14 - Opening dialogue
];

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

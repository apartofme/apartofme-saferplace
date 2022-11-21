import { SVG } from '../assets/svg';
import { IInstructionItem } from '../screens';

export const JOINT_GROUNDING_EXERCISE_ID = '55785050';
export const DAY_1_OPENING_DIALOG_ID = '55785563';

export const THE_CHARM_OF_HEALING_ID = '55602822';
export const COMPASSION_EXERCISES_ID = '55602820';
export const DAY_2_OPENING_DIALOG_ID = '55602818';

export const THE_CHARM_OF_DENCING_ID = '55602825';
export const CALM_EXERCISES_ID = '55712796';
export const DAY_3_OPENING_DIALOG_ID = '55602824';

export const THE_CHARM_OF_SLOW_WIND_ID = '55602829';
export const DAY_4_OPENING_DIALOG_ID = '55602827';

export const TRY_SOMETHING_NEW_PART_ONE_ID = '55602834';
export const COURAGE_EXERCISES_ID = '55602833';
export const DAY_5_OPENING_DIALOG_ID = '55602830';

export const THE_CHARM_OF_SANCTUARY_ID = '55602840';
export const DAY_6_OPENING_DIALOG_ID = '55648559';
export const TRY_SOMETHING_NEW_PART_TWO_ID = '55602837';

export const THE_CHARM_OF_KINDNESS_PART_ONE_ID = '55602844';
export const DAY_7_OPENING_DIALOG_ID = '55602843';

export const THE_CHARM_OF_ACCEPTANCE_PART_TWO_ID = '55602851';
export const THE_CHARM_OF_ACCEPTANCE_PART_ONE_ID = '55780109';
export const DAY_8_OPENING_DIALOG_ID = '55602849';
export const THE_CHARM_OF_KINDNESS_PART_TWO_ID = '55602848';

export const THE_CHARM_OF_THE_MIRROR_ID = '55602854';
export const DAY_9_OPENING_DIALOG_ID = '55602853';

export const THE_CHARM_OF_TRUTH_ID = '55602861';
export const DAY_10_OPENING_DIALOG_ID = '55602856';

export const THE_CHARM_OF_DISCOVERY_PART_ONE_ID = '55602865';
export const DAY_11_OPENING_DIALOG_ID = '55602862';

export const THE_CHARM_OF_OPEN_HAND = '55602870';
export const DAY_12_OPENING_DIALOG_ID = '55602869';
export const THE_CHARM_OF_DISCOVERY_PART_TWO_ID = '55602867';

export const DAY_13_CLOSING_DIALOGUE_ID = '55602873';
export const THE_CHARM_OF_BEFRIENDING_ID = '55602872';
export const DAY_13_OPENING_DIALOG_ID = '55602871';

export const DAY_14_CLOSING_DIALOGUE_ID = '55602887';
export const THE_CHARM_OF_WEAVING_ID = '55602886';
export const DAY_14_OPENING_DIALOG_ID = '55602874';

export const ALL_QUESTS_STACK = [
  //* DAY 1
  [JOINT_GROUNDING_EXERCISE_ID, DAY_1_OPENING_DIALOG_ID],
  //* DAY 2
  [THE_CHARM_OF_HEALING_ID, COMPASSION_EXERCISES_ID, DAY_2_OPENING_DIALOG_ID],
  //* DAY 3
  [THE_CHARM_OF_DENCING_ID, CALM_EXERCISES_ID, DAY_3_OPENING_DIALOG_ID],
  //* DAY 4
  [THE_CHARM_OF_SLOW_WIND_ID, DAY_4_OPENING_DIALOG_ID],
  //* DAY 5
  [
    TRY_SOMETHING_NEW_PART_ONE_ID,
    COURAGE_EXERCISES_ID,
    DAY_5_OPENING_DIALOG_ID,
  ],
  //* DAY 6
  [
    THE_CHARM_OF_SANCTUARY_ID,
    DAY_6_OPENING_DIALOG_ID,
    TRY_SOMETHING_NEW_PART_TWO_ID,
  ],
  //* DAY 7
  [THE_CHARM_OF_KINDNESS_PART_ONE_ID, DAY_7_OPENING_DIALOG_ID],
  //* DAY 8
  [
    THE_CHARM_OF_ACCEPTANCE_PART_TWO_ID,
    THE_CHARM_OF_ACCEPTANCE_PART_ONE_ID,
    DAY_8_OPENING_DIALOG_ID,
    THE_CHARM_OF_KINDNESS_PART_TWO_ID,
  ],
  //* DAY 9
  [THE_CHARM_OF_THE_MIRROR_ID, DAY_9_OPENING_DIALOG_ID],
  //* DAY 10
  [THE_CHARM_OF_TRUTH_ID, DAY_10_OPENING_DIALOG_ID],
  //* DAY 11
  [THE_CHARM_OF_DISCOVERY_PART_ONE_ID, DAY_11_OPENING_DIALOG_ID],
  //* DAY 12
  [
    THE_CHARM_OF_OPEN_HAND,
    DAY_12_OPENING_DIALOG_ID,
    THE_CHARM_OF_DISCOVERY_PART_TWO_ID,
  ],
  //* DAY 13
  [
    DAY_13_CLOSING_DIALOGUE_ID,
    THE_CHARM_OF_BEFRIENDING_ID,
    DAY_13_OPENING_DIALOG_ID,
  ],
  //* DAY 14
  [
    DAY_14_CLOSING_DIALOGUE_ID,
    THE_CHARM_OF_WEAVING_ID,
    DAY_14_OPENING_DIALOG_ID,
  ],
];

export const CHARMS_PART_TWO_IDS = [
  TRY_SOMETHING_NEW_PART_TWO_ID,
  THE_CHARM_OF_KINDNESS_PART_TWO_ID,
  THE_CHARM_OF_DISCOVERY_PART_TWO_ID,
  THE_CHARM_OF_ACCEPTANCE_PART_TWO_ID,
];

export const PLANTS_CHARM_IDS = [
  COMPASSION_EXERCISES_ID,
  CALM_EXERCISES_ID,
  COURAGE_EXERCISES_ID,
];

export const PLANTS_CHARM_NEXT_QUEST_LINE_IDS = [
  THE_CHARM_OF_HEALING_ID,
  THE_CHARM_OF_DENCING_ID,
  TRY_SOMETHING_NEW_PART_ONE_ID,
];

export const PRE_CHARM_DAILY_CHECK_IN = 'Pre Charm Daily Check In';
export const POST_CHARM_CHECK_IN = 'Post Charm Check In';
export const CHARM_ENDED = 'Charm Ended';
export const ILLUSTRATION_ICON = 'IllustrationIcon';
export const APP_FEEDBACK = 'App Feedback';
export const SKIP_CHARM_FEEDBACK = 'Skip Charm Feedback';

export const OPEN_DIALOG_IDS = [
  DAY_1_OPENING_DIALOG_ID,
  DAY_2_OPENING_DIALOG_ID,
  DAY_3_OPENING_DIALOG_ID,
  DAY_4_OPENING_DIALOG_ID,
  DAY_5_OPENING_DIALOG_ID,
  DAY_6_OPENING_DIALOG_ID,
  DAY_7_OPENING_DIALOG_ID,
  DAY_8_OPENING_DIALOG_ID,
  DAY_9_OPENING_DIALOG_ID,
  DAY_10_OPENING_DIALOG_ID,
  DAY_11_OPENING_DIALOG_ID,
  DAY_12_OPENING_DIALOG_ID,
  DAY_13_OPENING_DIALOG_ID,
  DAY_14_OPENING_DIALOG_ID,
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

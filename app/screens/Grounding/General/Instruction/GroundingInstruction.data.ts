import { ImageSourcePropType } from 'react-native';

import { IMAGES } from '../../../../assets';

export interface IGroundingInstructionItem {
  titleKey: string;
  image: ImageSourcePropType;
}

// TODO: change to correct images
export const INSTRUCTION_LIST: IGroundingInstructionItem[] = [
  {
    titleKey: 'screens.parent_grounding_exercise.instruction.first',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    titleKey: 'screens.parent_grounding_exercise.instruction.second',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    titleKey: 'screens.parent_grounding_exercise.instruction.third',
    image: IMAGES.WHITE_PENCIL,
  },
];

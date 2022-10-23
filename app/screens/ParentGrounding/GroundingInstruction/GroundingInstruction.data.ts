import { SVG } from '../../../assets/svg';
import { SvgComponentType } from '../../../utils/types';

export interface IGroundingInstructionItem {
  titleKey: string;
  image: SvgComponentType;
}

export const INSTRUCTION_LIST: IGroundingInstructionItem[] = [
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

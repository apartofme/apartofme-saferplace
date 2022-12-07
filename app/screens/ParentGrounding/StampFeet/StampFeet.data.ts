import { BackgroundImagesKeys } from '../../../utils/types';

export interface FeetExerciseItem {
  title: string;
  subtitle: string;
  background: BackgroundImagesKeys;
  buttonTitle: string;
}

export const FEET_EXERCISE_ITEMS: ReadonlyArray<FeetExerciseItem> = [
  {
    title: 'screens.parent_grounding_exercise.stamp_feet.title',
    subtitle: 'screens.parent_grounding_exercise.stamp_feet.description',
    background: 'PARENT_GROUNDING_STAMP_FEET',
    buttonTitle: 'buttons.next',
  },
  {
    title: 'screens.parent_grounding_exercise.plant_feet.title',
    subtitle: 'screens.parent_grounding_exercise.plant_feet.description',
    background: 'PARENT_GROUNDING_PLANT_FEET',
    buttonTitle: 'buttons.next',
  },
  {
    title: 'screens.parent_grounding_exercise.connect_feet.title',
    subtitle: 'screens.parent_grounding_exercise.connect_feet.description',
    background: 'PARENT_GROUNDING_CONNECT_FEET',
    buttonTitle: 'buttons.next',
  },
];

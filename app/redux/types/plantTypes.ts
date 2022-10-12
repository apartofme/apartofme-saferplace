import { IPlant } from '../../models/IPlant';
import { PlantAreaType } from '../../screens/Garden/components';
import { Nullable } from '../../utils';
import { PlantsType } from '../../utils/types';

export type IPlantArea = Record<PlantAreaType, Nullable<IPlant>>;

export const PLANTS_STACK = [
  PlantsType.SpourCompassion,
  PlantsType.SpourCompassion,
  PlantsType.SpourCompassion,
  PlantsType.SpourCompassion,
  PlantsType.SpourCompassion,
];

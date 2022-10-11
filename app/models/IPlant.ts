import { PlantAreaType } from '../screens/Garden/components';
import { PlantsType } from '../utils/types';

export interface IPlant {
  image: PlantsType;
  plantArea: PlantAreaType;
  plantedAt: string;
}

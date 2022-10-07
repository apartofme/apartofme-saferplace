import { PlantAreaType } from '../screens/Garden/components';
import { PlantsType } from '../utils/types';

export interface IPlant {
  image: keyof typeof PlantsType;
  plantArea: keyof typeof PlantAreaType;
  plantedAt: string;
}

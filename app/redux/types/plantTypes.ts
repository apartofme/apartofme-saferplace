import { IPlant } from '../../models/IPlant';
import { PlantAreaType } from '../../screens/Garden/components';
import { Nullable } from '../../utils';

export type IPlantArea = Record<PlantAreaType, Nullable<IPlant>>;

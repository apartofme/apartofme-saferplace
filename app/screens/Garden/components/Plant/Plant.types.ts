import { ImageStyle } from 'react-native';

import { IPlant } from '../../../../models/IPlant';

export interface IPlantProps {
  plant: IPlant;
  additionalStyle?: ImageStyle;
}

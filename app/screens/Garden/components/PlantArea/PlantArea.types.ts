import { Nullable } from '../../../../utils';

export interface IPlantAreaProps {
  isPlanting: boolean;
  isBefriending?: boolean;
  activePlantArea: Nullable<PlantAreaType>;
  setActivePlantArea: (value: Nullable<PlantAreaType>) => void;
}

export enum PlantAreaType {
  TopLeft = 'TopLeft',
  TopRight = 'TopRight',
  Center = 'Center',
  BottomLeft = 'BottomLeft',
  BottomRight = 'BottomRight',
}

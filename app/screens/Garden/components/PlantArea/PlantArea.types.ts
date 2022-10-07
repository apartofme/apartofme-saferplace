import { Nullable } from '../../../../utils';

export interface IPlantAreaProps {
  isPlanting: boolean;
  activePlantArea: Nullable<keyof typeof PlantAreaType>;
  setActivePlantArea: (value: Nullable<keyof typeof PlantAreaType>) => void;
}

export enum PlantAreaType {
  TopLeft = 'TopLeft',
  TopRight = 'TopRight',
  Center = 'Center',
  BottomLeft = 'BottomLeft',
  BottomRight = 'BottomRight',
}

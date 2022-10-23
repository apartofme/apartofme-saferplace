import { ISvgProps } from '../../../../utils/types';

export interface IMenuButtonProps {
  title: string;
  IconSvgComponent?: (props: ISvgProps) => JSX.Element;
  onPress: () => void;
}

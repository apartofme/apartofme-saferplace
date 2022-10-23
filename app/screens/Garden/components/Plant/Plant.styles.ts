import { StyleSheet, ViewStyle } from 'react-native';
import { isIOS } from '../../../../utils';

export interface IPlantStyles {
  plantContainer: ViewStyle;
}

export const styles = StyleSheet.create<IPlantStyles>({
  plantContainer: {
    position: 'absolute',
    zIndex: 1000,
  },
});

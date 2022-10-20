import { StyleSheet, ViewStyle } from 'react-native';
import { isIOS } from '../../../../utils';

export interface IPlantStyles {
  plantContainer: ViewStyle;
}

export const styles = StyleSheet.create<IPlantStyles>({
  plantContainer: {
    marginLeft: isIOS ? 0 : 5,
    paddingBottom: 45,
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    zIndex: 1000,
  },
});

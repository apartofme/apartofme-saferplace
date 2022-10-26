import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

export interface ITrySomethingNewCarouselStyles {
  container: ViewStyle;
  buttonsConainer: ViewStyle;
  titleContainer: ViewStyle;
  subtitle: TextStyle;
  selectButton: ViewStyle;
  modal: ViewStyle;
}

export const styles = StyleSheet.create<ITrySomethingNewCarouselStyles>({
  container: {
    flex: 1,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  buttonsConainer: {
    marginTop: 50,
    paddingHorizontal: 24,
  },
  titleContainer: {
    paddingHorizontal: 24,
    marginTop: 48,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 36,
    color: COLORS.LIGHT_GREY,
  },
  selectButton: {
    marginBottom: 24,
  },
  modal: {
    flex: 1,
    margin: 0,
  },
});

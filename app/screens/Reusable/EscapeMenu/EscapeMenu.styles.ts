import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

export interface IEscapeMenuStyles {
  container: ViewStyle;
  backArrowImage: ImageStyle;
  contentContainer: ViewStyle;
  button: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IEscapeMenuStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: COLORS.BLACK_TRANSPARENT_95,
  },
  backArrowImage: {
    marginLeft: 15,
    marginTop: 24,
    marginBottom: 34,
  },
  contentContainer: {
    paddingHorizontal: 15,
    marginHorizontal: 24,
    backgroundColor: 'white',
    borderRadius: 24,
  },
  button: {
    marginBottom: 24,
  },
  title: {
    textAlign: 'center',
    marginTop: 80,
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
});

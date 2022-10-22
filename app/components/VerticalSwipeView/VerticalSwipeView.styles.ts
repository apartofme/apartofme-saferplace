import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IMainHeaderStyles {
  topContentContainer: ViewStyle;
  topSubtitle: TextStyle;
  submitButton: ViewStyle;
  learnMoreArrow: ViewStyle;
  backArrow: ViewStyle;
  bottomTitle: TextStyle;
  bottomContentContainer: ViewStyle;
}

export const styles = StyleSheet.create<IMainHeaderStyles>({
  topContentContainer: {
    paddingHorizontal: 40,
    justifyContent: 'flex-end',
  },
  topSubtitle: {
    marginTop: 24,
    minHeight: 80,
  },
  submitButton: {
    marginTop: 43,
    marginBottom: 29,
  },
  learnMoreArrow: {
    paddingTop: 15,
    paddingBottom: 16,
    alignSelf: 'center',
  },
  backArrow: {
    paddingTop: 24,
    paddingBottom: 17,
    alignSelf: 'center',
  },
  bottomTitle: {
    paddingTop: 92,
    paddingBottom: 40,
    color: COLORS.BRILLIANT_WHITE,
  },
  bottomContentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../../themes/colors';

interface IJournelScreenStyles {
  container: ViewStyle;
  description: TextStyle;
  inputContainer: ViewStyle;
}

export const styles = StyleSheet.create<IJournelScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  description: {
    marginTop: 16,
    color: COLORS.LIGHT_GREY,
  },
  inputContainer: {
    marginTop: 36,
    height: 160,
  },
});

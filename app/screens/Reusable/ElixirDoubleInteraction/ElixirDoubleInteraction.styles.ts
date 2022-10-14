import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

export interface IElixirDoubleInteractionStyles {
  container: ViewStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
  border: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  square: ViewStyle;
  redBackground: ViewStyle;
}

export const styles = StyleSheet.create<IElixirDoubleInteractionStyles>({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingBottom: 24,
  },
  // TODO: change to cerrect styles
  button: {
    height: 80,
    width: 80,
    borderRadius: 99,
    backgroundColor: COLORS.PRIMARY,
  },
  // TODO: remove
  border: {
    borderWidth: 5,
    borderColor: COLORS.BORDER,
  },
  title: {
    textAlign: 'center',
    marginBottom: 60,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
  // TODO: remove when add animation
  square: {
    backgroundColor: 'gray',
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  redBackground: {
    backgroundColor: 'red',
  },
});

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IDummyQuestsScreenStyles {
  container: ViewStyle;
  buttonsTitle: TextStyle;
  questsTitle: TextStyle;
  button: ViewStyle;
  questConteiner: ViewStyle;
}

export const styles = StyleSheet.create<IDummyQuestsScreenStyles>({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonsTitle: {
    marginVertical: 20,
  },
  questsTitle: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 5,
  },
  questConteiner: {
    marginVertical: 5,
  },
});

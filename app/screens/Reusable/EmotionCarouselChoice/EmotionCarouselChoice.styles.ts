import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IEmotionCarouselChoiceScreenStyles {
  container: ViewStyle;
  card: ViewStyle;
  textCenter: TextStyle;
}

export const styles = StyleSheet.create<IEmotionCarouselChoiceScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 240,
    marginTop: 48,
    marginHorizontal: 40,
    marginBottom: 37,
    paddingHorizontal: 24,
    // TODO: change to correct styles
    backgroundColor: '#712CA4',
    borderRadius: 24,
  },
  textCenter: {
    textAlign: 'center',
  },
});

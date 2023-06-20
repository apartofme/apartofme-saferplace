import AsyncStorage from '@react-native-community/async-storage';

const recognitionStackScreen = 'recognition_stack_screen';
const mainStack = 'main_stack';

export const SaveRecognitionStackScreenName = async (screen: string) => {
  await AsyncStorage.setItem(recognitionStackScreen, screen);
};

export const GetRecognitionStackScreenName = async () => {
  return await AsyncStorage.getItem(recognitionStackScreen);
};

export const SaveMainStackName = async (screen: string) => {
  await AsyncStorage.setItem(mainStack, screen);
};

export const GetMainStackName = async () => {
  return await AsyncStorage.getItem(mainStack);
};

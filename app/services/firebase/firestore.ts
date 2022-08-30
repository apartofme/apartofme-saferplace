import firestore from '@react-native-firebase/firestore';

import { getCurrentUser } from './auth';
import { getDeviceToken } from './notifications';

export const firestoreSaveDeviceToken = async () => {
  const userId = getCurrentUser();
  const token = await getDeviceToken();

  await firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
};

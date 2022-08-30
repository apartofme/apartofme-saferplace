import firestore from '@react-native-firebase/firestore';

import { getCurrentUser } from './auth';
import { getDeviceToken } from './notifications';

export const saveTokenToDatabase = async () => {
  const userId = getCurrentUser();
  const token = getDeviceToken();

  await firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
};

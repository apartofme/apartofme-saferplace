import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  EditProfileScreen,
  IEditProfileRoute,
  ManageProfilesScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type EditProfileStackParams = {
  ManageProfiles: undefined;
  EditProfile: { data: IEditProfileRoute };
};

const Stack = createNativeStackNavigator<EditProfileStackParams>();

export const EditProfileStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="ManageProfiles" component={ManageProfilesScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
  </Stack.Navigator>
);

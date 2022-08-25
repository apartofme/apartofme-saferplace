import React, { useCallback, useState } from 'react';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IMAGES } from '../../assets';
import {
  ExtendedButton,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
} from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userSlice } from '../../redux/slices';
import { generalStyles } from '../../utils/styles';
import { TEST_PASSWORD, TEST_USERNAME } from './HomeScreen.dummy';
import { IHomeScreenProps } from './HomeScreen.props';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = useAppSelector(state => state.user.user);

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onTestDispatchAction = useCallback(() => {
    dispatch(
      userSlice.actions.loginUser({
        email: TEST_USERNAME,
        password: TEST_PASSWORD,
      }),
    );
  }, [dispatch]);

  const goToReanimatedPage = useCallback(() => {
    navigation.navigate('Reanimated');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Image source={IMAGES.LOGO} style={styles.logo} />
          <ExtendedText preset="title">Beyond Codeline</ExtendedText>
        </View>
        <ExtendedText preset="default" style={styles.description}>
          The Best React Native Boilerplate
        </ExtendedText>

        <View style={styles.formContainer}>
          <ExtendedTextInput
            type={ExtendedTextInputType.Email}
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <ExtendedTextInput
            type={ExtendedTextInputType.PasswordToggle}
            label="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <ExtendedButton
          onPress={onTestDispatchAction}
          title="Dispatch action!"
          titleStyle={styles.dispatchTestButtonText}
        />
        <ExtendedButton
          onPress={goToReanimatedPage}
          title="Go to Reanimated"
          titleStyle={styles.dispatchTestButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

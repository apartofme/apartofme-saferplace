import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import notifee from '@notifee/react-native';
import moment from 'moment';

import { IInitialScreenProps } from './InitialScreen.types';
import { styles } from './InitialScreen.styles';
import { useAppDispatch, useAppSelector, useMount } from '../../hooks';
import { cacheSlice, questSlice } from '../../redux/slices';
import { ONE_DAY_SECONDS } from '../../constants/time';
import { BACKGROUND_IMAGES } from '../../assets';
import { generalStyles } from '../../utils/styles';
import { showInternetErrorAlert } from '../../utils';
import { NadiyaTextIcon } from '../../assets/svg/NadiyaTextIcon';
import { ErrorInfoIcon } from '../../assets/svg/errorInfoIcon/ErrorInfoIcon';
import { GetMainStackName } from '../../navigation/navigationAsyncStorage';
import { RootParams } from '../../navigation/rootNavigator';

export const InitialScreen: React.FC<IInitialScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const netInfo = useNetInfo();

  const {
    currentDay,
    lastDayUpdate,
    interruptedQuestLine,
    currentDayQuestsStack,
  } = useAppSelector(state => state.quest);
  const isCurrentDayQuestsStackEmpty = !currentDayQuestsStack;
  const user = useAppSelector(state => state.user);
  const { isSaveAllQuests, isSaveTranslations } = useAppSelector(
    state => state.app.loading,
  );

  const [isStartLoading, setIsStartLoading] = useState(false);
  const [mainStackScreen, setMainStackScreen] = useState<keyof RootParams>();

  useEffect(() => {
    if (netInfo.isConnected === false) {
      showInternetErrorAlert(undefined, undefined, () => <ErrorInfoIcon />);
    }
  }, [netInfo.isConnected]);

  useMount(() => {
    dispatch(questSlice.actions.saveAllQuests());
    dispatch(cacheSlice.actions.saveTranslations());
    setIsStartLoading(true);

    const nowSeconds = +moment().format('X');

    if (
      nowSeconds - lastDayUpdate >= ONE_DAY_SECONDS &&
      !interruptedQuestLine &&
      isCurrentDayQuestsStackEmpty &&
      user.parent
    ) {
      dispatch(questSlice.actions.setLastDayUpdate());
      dispatch(questSlice.actions.updateCurrentDay(currentDay + 1));
      dispatch(questSlice.actions.setCurrentDayQuestsStack());
    }
  });

  useEffect(() => {
    const getMainStack = async () => {
      const mainNavigationStack =
        (await GetMainStackName()) as keyof RootParams;
      if (mainNavigationStack) {
        setMainStackScreen(mainNavigationStack);
      } else {
        setMainStackScreen('Initial');
      }
    };

    notifee.requestPermission();
    if (!isSaveAllQuests && !isSaveTranslations && isStartLoading) {
      getMainStack();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSaveAllQuests, isSaveTranslations]);

  useEffect(() => {
    notifee.requestPermission();
    if (!isSaveAllQuests && !isSaveTranslations && isStartLoading) {
      if (mainStackScreen === 'Initial') {
        if (user.parent && user.child) {
          navigation.replace('GardenStack');
          // navigation.replace('QuestStack');
          return;
        }
        if (user.parent && !user.child) {
          navigation.replace('ParentsOnboardingStack', {
            screen: 'CharmsIntroducing',
          });
          return;
        }
        navigation.replace('ParentsOnboardingStack');
      } else {
        if (mainStackScreen !== undefined) {
          navigation.replace(mainStackScreen);
        }
      }
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSaveAllQuests, isSaveTranslations, mainStackScreen]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.SPLASHSCREEN_ADULT}
      style={generalStyles.flex}>
      <SafeAreaView style={styles.container}>
        <NadiyaTextIcon />
      </SafeAreaView>
    </ImageBackground>
  );
};

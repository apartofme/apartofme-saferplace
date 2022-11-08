import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import moment from 'moment';

import { IInitialScreenProps } from './InitialScreen.types';
import { styles } from './InitialScreen.styles';
import { useAppDispatch, useAppSelector, useMount } from '../../hooks';
import { cacheSlice, questSlice } from '../../redux/slices';
import { ONE_DAY_SECONDS } from '../../constants/time';
import { BACKGROUND_IMAGES } from '../../assets';
import { generalStyles } from '../../utils/styles';
import { NadiyaTextIcon } from '../../assets/svg/onboarding';

export const InitialScreen: React.FC<IInitialScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const {
    currentDay,
    lastDayUpdate,
    interruptedQuestLine,
    currentDayQuestsStack,
  } = useAppSelector(state => state.quest);
  const isCurrentDayQuestsStackEmpty = !currentDayQuestsStack;
  const user = useAppSelector(state => state.user);
  const [isStartLoading, setIsStartLoading] = useState(false);

  const { isSaveAllQuests, isSaveTranslations } = useAppSelector(
    state => state.app.loading,
  );

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
    if (!isSaveAllQuests && !isSaveTranslations && isStartLoading) {
      if (user.parent && user.child) {
        navigation.replace('QuestStack');
        return;
      }
      if (user.parent && !user.child) {
        navigation.replace('ParentsOnboardingStack', {
          screen: 'CharmsIntroducing',
        });
        return;
      }
      navigation.replace('ParentsOnboardingStack');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSaveAllQuests, isSaveTranslations]);

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

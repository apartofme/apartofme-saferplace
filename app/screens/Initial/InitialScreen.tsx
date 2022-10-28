import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import moment from 'moment';

import { IInitialScreenProps } from './InitialScreen.types';
import { styles } from './InitialScreen.styles';
import { useAppDispatch, useAppSelector, useMount } from '../../hooks';
import { cacheSlice, questSlice } from '../../redux/slices';
import { ONE_DAY_SECONDS } from '../../constants/time';

export const InitialScreen: React.FC<IInitialScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const currentDay = useAppSelector(state => state.quest.currentDay);
  const lastDayUpdate = useAppSelector(state => state.quest.lastDayUpdate);
  const interruptedQuestLine = useAppSelector(
    state => state.quest.interruptedQuestLine,
  );
  const isCurrentDayQuestsStackEmpty = useAppSelector(
    state => !state.quest.currentDayQuestsStack?.length ?? [],
  );
  const user = useAppSelector(state => state.user);
  const cacheUser = useAppSelector(state => state.cache.auth);
  const [isStartLoading, setIsStartLoading] = useState(false);

  const isSaveAllQuestsLoading = useAppSelector(
    state => state.app.loading.isSaveAllQuests,
  );
  const isSaveTranslationsLoading = useAppSelector(
    state => state.app.loading.isSaveTranslations,
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
    if (
      !isSaveAllQuestsLoading &&
      !isSaveTranslationsLoading &&
      isStartLoading
    ) {
      if (user.parent && user.child) {
        navigation.replace('QuestStack');
        return;
      }
      if (cacheUser.parent?.avatar && !cacheUser.child?.avatar) {
        navigation.replace('JointOnboardingStack');
        return;
      }
      navigation.replace('ParentsOnboardingStack');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSaveAllQuestsLoading, isSaveTranslationsLoading]);

  return (
    <SafeAreaView style={styles.root}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

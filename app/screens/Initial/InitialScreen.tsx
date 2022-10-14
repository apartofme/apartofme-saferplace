import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';

import { IInitialScreenProps } from './InitialScreen.types';
import { styles } from './InitialScreen.styles';
import { useAppDispatch, useAppSelector, useMount } from '../../hooks';
import { cacheSlice, questSlice } from '../../redux/slices';

export const InitialScreen: React.FC<IInitialScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.parent);
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
  });

  useEffect(() => {
    if (
      !isSaveAllQuestsLoading &&
      !isSaveTranslationsLoading &&
      isStartLoading
    ) {
      if (user) {
        navigation.replace('ParentGroundingStack');
      } else {
        navigation.replace('ParentsOnboardingStack');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSaveAllQuestsLoading, isSaveTranslationsLoading]);

  return (
    <SafeAreaView style={styles.root}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

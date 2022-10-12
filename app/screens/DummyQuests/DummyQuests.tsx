import { values } from 'lodash';
import React, { useCallback } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { IMAGES } from '../../assets';

import { ExtendedText, ExtendedButton } from '../../components';
import { useAppDispatch, useAppSelector, useMount } from '../../hooks';
import { IQuest } from '../../models/IQuest';
import { IQuestLine } from '../../models/IQuestLine';
import { cacheSlice, questSlice } from '../../redux/slices';
import { generalStyles } from '../../utils/styles';
import { styles } from './DummyQuests.styles';
import { IDummyQuestsScreenProps } from './DummyQuests.types';

export const DummyQuestsScreen: React.FC<IDummyQuestsScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(
    state => state.settings.settings.language,
  );
  const allQuests = useAppSelector(
    state => state.quest.allQuests?.[currentLanguage as string],
  );

  const parentNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;
  const childNickname = useAppSelector(
    state => state.user.child?.nickname,
  ) as string;

  // TODO: remove
  useMount(() => {
    dispatch(cacheSlice.actions.setDefaultCurrentQuestionIndex());
    dispatch(
      cacheSlice.actions.saveNicknames({
        firstPlayer: parentNickname,
        secondPlayer: childNickname,
      }),
    );
  });

  const renderItem = useCallback(
    ({ item }: { item: IQuestLine }) => {
      const onPress = () => {
        const quests: IQuest[] = values(item.quests);
        dispatch(
          questSlice.actions.saveCurrentQuestLine({
            id: quests[0].questLineId,
            quests,
          }),
        );
        dispatch(questSlice.actions.saveCurrentQuestIdx(0));
        navigation.navigate(quests[0].type, {
          data: { ...quests[0] },
        });
        dispatch(questSlice.actions.clearQuestStack());
        dispatch(cacheSlice.actions.clearEmotions());
      };

      return (
        <TouchableOpacity onPress={onPress} style={styles.questConteiner}>
          <ExtendedText>{item.title}</ExtendedText>
        </TouchableOpacity>
      );
    },
    [dispatch, navigation],
  );

  // TODO: remove
  const goToRecognitionStack = useCallback(() => {
    navigation.navigate('RecognitionStack');
  }, [navigation]);

  const goToParentGroundingStack = useCallback(() => {
    navigation.navigate('ParentGroundingStack', {
      screen: 'GroundingStart',
      params: {
        data: {
          image: IMAGES.LOGO,
          titleKey: 'screens.parent_grounding_exercise.grounding_start.title',
          subtitleKey:
            'screens.parent_grounding_exercise.grounding_start.subtitle',
          aboutTitleKey:
            'screens.parent_grounding_exercise.grounding_start.about_title',
          aboutSubtitleKey:
            'screens.parent_grounding_exercise.grounding_start.about_subtitle',
          topBackground: IMAGES.WHITE_BACK_ARROW,
          bottomBackground: IMAGES.WHITE_BACK_ARROW,
          nextRouteName: 'ComingSoon',
        },
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ExtendedText preset="large-title" style={styles.buttonsTitle}>
        Dummy buttons:
      </ExtendedText>
      <ExtendedButton
        onPress={navigation.goBack}
        title="Go back"
        style={styles.button}
      />
      <ExtendedButton
        onPress={goToRecognitionStack}
        title="To recognition"
        style={styles.button}
      />
      <ExtendedButton
        onPress={goToParentGroundingStack}
        title="To parent grounding"
        style={styles.button}
      />
      <ExtendedText preset="large-title" style={styles.questsTitle}>
        Quests:
      </ExtendedText>
      <FlatList
        style={generalStyles.flex}
        data={values(allQuests)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

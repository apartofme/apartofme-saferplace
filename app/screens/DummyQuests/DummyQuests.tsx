import { values } from 'lodash';
import React, { useCallback } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { ExtendedButton, ExtendedText } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IQuest } from '../../models/IQuest';
import { IQuestLine } from '../../models/IQuestLine';
import { questSlice } from '../../redux/slices';
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
  const goToMenuStack = useCallback(() => {
    navigation.navigate('MenuStack');
  }, [navigation]);

  // TODO: remove
  const goToRecognitionStack = useCallback(() => {
    navigation.navigate('RecognitionStack');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ExtendedText preset="large-title" style={styles.buttonsTitle}>
        Dummy buttons:
      </ExtendedText>
      <ExtendedButton
        onPress={goToMenuStack}
        title="To menu"
        style={styles.button}
      />
      <ExtendedButton
        onPress={goToRecognitionStack}
        title="To recognitionn"
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

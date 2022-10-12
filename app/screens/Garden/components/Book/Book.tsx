import React, { useCallback, useMemo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IMAGES } from '../../../../assets';
import { useAppSelector } from '../../../../hooks';
import { IBookProps } from './Book.types';
import { styles } from './Book.styles';
import { CharmBookMenuType } from '../../CharmBookMenu';

export const Book: React.FC<IBookProps> = ({ isDisabled }) => {
  const navigation = useNavigation();

  const interruptedQuestLine = useAppSelector(
    state => state.quest.interruptedQuestLine,
  );

  const isCompletedAllCurrentDayQuests = useAppSelector(
    state => !state.quest.currentDayQuestsStack.length,
  );

  const bookImage = useMemo(() => {
    if (isCompletedAllCurrentDayQuests) {
      return IMAGES.CLOSED_BOOK;
    }
    return IMAGES.OPEN_BOOK;
  }, [isCompletedAllCurrentDayQuests]);

  const onBookPress = useCallback(() => {
    if (interruptedQuestLine) {
      navigation.navigate('CharmBookMenu', {
        type: CharmBookMenuType.InterruptedCharm,
      });
      return;
    }
    if (isCompletedAllCurrentDayQuests) {
      navigation.navigate('CharmBookMenu', {
        type: CharmBookMenuType.NoneCharm,
      });
      return;
    }
    navigation.navigate('CharmBookMenu', {
      type: CharmBookMenuType.NewCharm,
    });
  }, [interruptedQuestLine, isCompletedAllCurrentDayQuests, navigation]);

  return (
    <TouchableOpacity
      onPress={onBookPress}
      disabled={isDisabled}
      style={styles.bookContainer}>
      <Image source={bookImage} style={styles.book} />
    </TouchableOpacity>
  );
};

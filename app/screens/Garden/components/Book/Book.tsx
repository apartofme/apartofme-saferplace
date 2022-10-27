import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { useAppSelector } from '../../../../hooks';
import { IBookProps } from './Book.types';
import { styles } from './Book.styles';
import { CharmBookMenuType } from '../../CharmBookMenu';
import { SVG } from '../../../../assets/svg';

const ClosedBookIcon = SVG.ClosedBookIcon;
const OpenBookIcon = SVG.OpenBookIcon;

export const Book: React.FC<IBookProps> = ({
  isDisabled,
  setType,
  setModalStatus,
}) => {
  const interruptedQuestLine = useAppSelector(
    state => state.quest.interruptedQuestLine,
  );

  const isCompletedAllCurrentDayQuests = useAppSelector(
    state => !state.quest.currentDayQuestsStack?.length ?? false,
  );

  const bookImage = useMemo(() => {
    if (isCompletedAllCurrentDayQuests) {
      return <ClosedBookIcon />;
    }
    return <OpenBookIcon />;
  }, [isCompletedAllCurrentDayQuests]);

  const onBookPress = useCallback(() => {
    if (setType && setModalStatus) {
      if (interruptedQuestLine) {
        setType(CharmBookMenuType.InterruptedCharm);
        setModalStatus();
        return;
      }
      if (isCompletedAllCurrentDayQuests) {
        setType(CharmBookMenuType.NoneCharm);
        setModalStatus();
        return;
      }
      setType(CharmBookMenuType.NewCharm);
      setModalStatus();
    }
  }, [
    interruptedQuestLine,
    isCompletedAllCurrentDayQuests,
    setModalStatus,
    setType,
  ]);

  return (
    <TouchableOpacity
      onPress={onBookPress}
      disabled={isDisabled}
      style={styles.bookContainer}>
      {bookImage}
    </TouchableOpacity>
  );
};

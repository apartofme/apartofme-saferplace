import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import _ from 'lodash';

import { useAppSelector } from '../../../../hooks';
import { IBookProps } from './Book.types';
import { styles } from './Book.styles';
import { CharmBookMenuType } from '../../CharmBookMenu';
import { SVG } from '../../../../assets/svg';
import { OPEN_DIALOG_IDS } from '../../../../constants/quest';

const ClosedBookIcon = SVG.ClosedBookIcon;
const OpenBookIcon = SVG.OpenBookIcon;

export const Book: React.FC<IBookProps> = ({
  isDisabled,
  setType,
  setModalStatus,
}) => {
  const { interruptedQuestLine, currentDayQuestsStack } = useAppSelector(
    state => state.quest,
  );
  const isCompletedAllCurrentDayQuests = useMemo(
    () => !currentDayQuestsStack?.length,
    [currentDayQuestsStack],
  );

  const isOpeningDialog = useMemo(() => {
    if (currentDayQuestsStack?.length > 0) {
      return !!_.find(
        OPEN_DIALOG_IDS,
        item =>
          currentDayQuestsStack[currentDayQuestsStack?.length - 1] === item,
      );
    }
    return false;
  }, [currentDayQuestsStack]);

  const bookImage = useMemo(() => {
    if (
      !interruptedQuestLine &&
      (isCompletedAllCurrentDayQuests || isOpeningDialog)
    ) {
      return <ClosedBookIcon />;
    }
    return <OpenBookIcon reduceSize={false} />;
  }, [interruptedQuestLine, isCompletedAllCurrentDayQuests, isOpeningDialog]);

  const onBookPress = useCallback(() => {
    if (setType && setModalStatus) {
      if (interruptedQuestLine) {
        setType(CharmBookMenuType.InterruptedCharm);
        setModalStatus();
        return;
      }

      if (isCompletedAllCurrentDayQuests || isOpeningDialog) {
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
    isOpeningDialog,
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

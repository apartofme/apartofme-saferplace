import { values } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { ClosedBookIcon, OpenBookIcon } from '../../../assets/images/dummySVG';
import { SVG_ICONS } from '../../../assets/svg';
import { ExtendedButton, ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector, useMount } from '../../../hooks';
import { cacheSlice, questSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { styles } from './CharmBookMenu.styles';
import {
  CharmBookMenuType,
  ICharmBookMenuScreenProps,
} from './CharmBookMenu.types';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

export const CharmBookMenuScreen: React.FC<ICharmBookMenuScreenProps> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { type } = route.params;

  const currentLanguage = useAppSelector(
    state => state.settings.settings.language,
  ) as string;
  const allQuests = useAppSelector(
    state => state.quest.allQuests?.[currentLanguage],
  );
  const currentDayQuestStack = useAppSelector(
    state => state.quest.currentDayQuestsStack,
  );
  const parentNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;
  const childNickname = useAppSelector(
    state => state.user.child?.nickname,
  ) as string;
  const interruptedQuestLine = useAppSelector(
    state => state.quest.interruptedQuestLine,
  );
  const completedQuestsId = useAppSelector(
    state => state.quest.completedQuestsId,
  );

  useMount(() => {
    dispatch(
      cacheSlice.actions.saveNicknames({
        firstPlayer: parentNickname,
        secondPlayer: childNickname,
      }),
    );
  });

  const onCompletedPress = useCallback(() => {
    navigation.push('SelectCharmCarousel');
  }, [navigation]);

  const onPlayPress = useCallback(() => {
    if (type === CharmBookMenuType.NewCharm) {
      const newQuestLineId =
        currentDayQuestStack[currentDayQuestStack.length - 1];
      const newQuests = values(allQuests?.[newQuestLineId].quests);

      dispatch(
        questSlice.actions.saveCurrentQuestLine({
          id: newQuests[0].questLineId,
          quests: newQuests,
        }),
      );
      dispatch(questSlice.actions.saveCurrentQuestIdx(0));
      // TODO: types
      navigation.push('QuestStack', {
        screen: newQuests[0].type,
        params: {
          data: { ...newQuests[0] },
        },
      });
    }

    if (interruptedQuestLine) {
      const interruptedQuestId = interruptedQuestLine?.id;
      const interruptedQuests = values(allQuests?.[interruptedQuestId].quests);

      dispatch(
        questSlice.actions.saveCurrentQuestLine({
          id: interruptedQuestLine.id,
          quests: interruptedQuests,
        }),
      );
      dispatch(
        questSlice.actions.saveCurrentQuestIdx(
          interruptedQuestLine.interruptedQuestInx,
        ),
      );
      // TODO: types
      navigation.push('QuestStack', {
        screen:
          interruptedQuests[interruptedQuestLine.interruptedQuestInx].type,
        params: {
          data: {
            ...interruptedQuests[interruptedQuestLine.interruptedQuestInx],
          },
        },
      });
    }

    dispatch(questSlice.actions.clearQuestStack());
    dispatch(cacheSlice.actions.clearEmotions());
  }, [
    allQuests,
    currentDayQuestStack,
    dispatch,
    interruptedQuestLine,
    navigation,
    type,
  ]);

  const onSkipPress = useCallback(() => {
    if (interruptedQuestLine) {
      dispatch(
        questSlice.actions.saveCompletedQuestsId(+interruptedQuestLine.id),
      );
      dispatch(questSlice.actions.updateInterruptedQuestLine(null));
    }
  }, [dispatch, interruptedQuestLine]);

  const menuContent = useMemo(() => {
    switch (type) {
      case CharmBookMenuType.InterruptedCharm:
        return (
          <View style={generalStyles.flex}>
            <OpenBookIcon />
            <View style={styles.titleContainer}>
              <ExtendedText preset="heading" style={styles.title}>
                {t('screens.garden.charm_book_menu.interrupted.title')}
              </ExtendedText>
              <ExtendedText preset="body-regular" style={styles.title}>
                {t('screens.garden.charm_book_menu.interrupted.description')}
              </ExtendedText>
              <ExtendedButton title={t('buttons.play')} onPress={onPlayPress} />
              <ExtendedButton title={t('buttons.skip')} onPress={onSkipPress} />
            </View>
          </View>
        );

      case CharmBookMenuType.NewCharm:
        return (
          <View style={generalStyles.flex}>
            <OpenBookIcon />
            <View style={styles.titleContainer}>
              <ExtendedText preset="heading" style={styles.title}>
                {t('screens.garden.charm_book_menu.new')}
              </ExtendedText>
              <ExtendedButton title={t('buttons.play')} onPress={onPlayPress} />
            </View>
          </View>
        );

      default:
        return (
          <View style={generalStyles.flex}>
            <ClosedBookIcon />
            <View style={styles.titleContainer}>
              <ExtendedText preset="heading" style={styles.title}>
                {t('screens.garden.charm_book_menu.none')}
              </ExtendedText>
              <ExtendedButton
                title={t('buttons.completed_charms')}
                onPress={onCompletedPress}
              />
            </View>
          </View>
        );
    }
  }, [onCompletedPress, onPlayPress, onSkipPress, t, type]);

  const button = useMemo(() => {
    if (type !== CharmBookMenuType.NoneCharm && completedQuestsId.length >= 5) {
      return (
        <ExtendedButton
          title={t('buttons.completed_charms')}
          onPress={onCompletedPress}
        />
      );
    }

    return null;
  }, [completedQuestsId.length, onCompletedPress, t, type]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={<WhiteBackArrowIcon />}
        onLeftIconPress={navigation.goBack}
      />
      {menuContent}
      {button && button}
    </SafeAreaView>
  );
};

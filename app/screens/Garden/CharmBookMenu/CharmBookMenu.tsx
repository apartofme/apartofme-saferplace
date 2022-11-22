import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { values } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import { SVG } from '../../../assets/svg';
import { ExtendedButton, ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector, useMount } from '../../../hooks';
import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { cacheSlice, questSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { styles } from './CharmBookMenu.styles';
import {
  CharmBookMenuType,
  ICharmBookMenuScreenProps,
} from './CharmBookMenu.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const OpenBookIcon = SVG.OpenBookIcon;

export const CharmBookMenuScreen: React.FC<ICharmBookMenuScreenProps> = ({
  type,
  setModalStatus,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<MergedStackParams>>();

  const currentLanguage = useAppSelector(
    state => state.settings.settings.language ?? 'en',
  );
  const allQuests = useAppSelector(
    state => state.quest.allQuests?.[currentLanguage],
  );
  const { currentDayQuestsStack, interruptedQuestLine, completedQuestsId } =
    useAppSelector(state => state.quest);
  const { parent, child } = useAppSelector(state => state.user);

  useMount(() => {
    dispatch(
      cacheSlice.actions.saveNicknames({
        firstPlayer: parent?.nickname ?? '',
        secondPlayer: child?.nickname ?? '',
      }),
    );
  });

  const onCompletedPress = useCallback(() => {
    navigation.push('SelectCharmCarousel');
    setModalStatus();
  }, [navigation, setModalStatus]);

  const onPlayPress = useCallback(() => {
    if (type === CharmBookMenuType.NewCharm) {
      const newQuestLineId =
        currentDayQuestsStack[currentDayQuestsStack.length - 1];
      const newQuests = values(allQuests?.[newQuestLineId].quests);

      dispatch(
        questSlice.actions.saveCurrentQuestLine({
          id: newQuests[0].questLineId,
          quests: newQuests,
        }),
      );
      dispatch(questSlice.actions.saveCurrentQuestIdx(0));
      navigation.reset({
        index: 1,
        routes: [
          {
            name: 'GardenStack',
            params: {
              screen: 'Garden',
            },
          },
          {
            name: 'QuestStack',
            params: {
              screen: newQuests[0].type,
              params: {
                data: { ...newQuests[0] },
              },
            },
          },
        ],
      });
      setModalStatus();
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
      navigation.reset({
        index: 1,
        routes: [
          {
            name: 'GardenStack',
            params: {
              screen: 'Garden',
            },
          },
          {
            name: 'QuestStack',
            params: {
              screen:
                interruptedQuests[interruptedQuestLine.interruptedQuestInx]
                  .type,
              params: {
                data: {
                  ...interruptedQuests[
                    interruptedQuestLine.interruptedQuestInx
                  ],
                },
              },
            },
          },
        ],
      });
      setModalStatus();
    }

    dispatch(questSlice.actions.clearQuestStack());
    dispatch(cacheSlice.actions.clearEmotions());
  }, [
    allQuests,
    currentDayQuestsStack,
    dispatch,
    interruptedQuestLine,
    navigation,
    setModalStatus,
    type,
  ]);

  const onSkipPress = useCallback(() => {
    if (interruptedQuestLine) {
      navigation.push('SkipCharmAlert');
      setModalStatus();
    }
  }, [interruptedQuestLine, navigation, setModalStatus]);

  const menuContent = useMemo(() => {
    switch (type) {
      case CharmBookMenuType.InterruptedCharm:
        return (
          <View>
            <View style={styles.icon}>
              <OpenBookIcon width={204} height={160} />
            </View>
            <View style={styles.dialogueContainer}>
              <ExtendedText preset="heading" style={styles.title}>
                {t('screens.garden.charm_book_menu.interrupted.title')}
              </ExtendedText>
              <ExtendedText preset="body-regular" style={styles.description}>
                {t('screens.garden.charm_book_menu.interrupted.description')}
              </ExtendedText>
              <ExtendedButton
                title={t('buttons.play_now')}
                onPress={onPlayPress}
              />
              <TouchableOpacity onPress={onSkipPress} style={styles.skipButton}>
                <ExtendedText
                  preset="secondary-text"
                  style={generalStyles.brilliantWhite}>
                  {t('buttons.skip').toUpperCase()}
                </ExtendedText>
              </TouchableOpacity>
            </View>
          </View>
        );

      case CharmBookMenuType.NewCharm:
        return (
          <View>
            <View style={styles.icon}>
              <OpenBookIcon width={204} height={160} />
            </View>
            <View style={styles.dialogueContainer}>
              <ExtendedText preset="heading" style={styles.title}>
                {t('screens.garden.charm_book_menu.new.title')}
              </ExtendedText>
              <ExtendedText preset="secondary-text" style={styles.description}>
                {t('screens.garden.charm_book_menu.new.description')}
              </ExtendedText>
              <ExtendedButton
                title={t('buttons.play_now')}
                onPress={onPlayPress}
              />
            </View>
          </View>
        );

      default:
        return (
          <View>
            <View style={styles.icon}>
              <OpenBookIcon width={204} height={160} />
            </View>
            <View style={styles.dialogueContainer}>
              <ExtendedText preset="heading" style={styles.title}>
                {t('screens.garden.charm_book_menu.none.title')}
              </ExtendedText>
              {completedQuestsId.length >= 5 && (
                <>
                  <ExtendedText
                    preset="secondary-text"
                    style={styles.description}>
                    {t('screens.garden.charm_book_menu.none.description')}
                  </ExtendedText>
                  <ExtendedButton
                    title={t('buttons.completed_charms')}
                    onPress={onCompletedPress}
                  />
                </>
              )}
            </View>
          </View>
        );
    }
  }, [
    completedQuestsId.length,
    onCompletedPress,
    onPlayPress,
    onSkipPress,
    t,
    type,
  ]);

  const button = useMemo(() => {
    if (type !== CharmBookMenuType.NoneCharm && completedQuestsId.length >= 5) {
      return (
        <ExtendedButton
          preset="border"
          title={t('buttons.completed_charms')}
          onPress={onCompletedPress}
          style={styles.buttonCompleted}
        />
      );
    }

    return <View style={styles.empty} />;
  }, [completedQuestsId.length, onCompletedPress, t, type]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <MainHeader
        leftIcon={<WhiteBackArrowIcon />}
        onLeftIconPress={setModalStatus}
      />
      {menuContent}
      {button && button}
    </SafeAreaView>
  );
};

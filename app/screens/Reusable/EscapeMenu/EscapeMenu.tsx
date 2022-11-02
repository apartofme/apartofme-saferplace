import { values } from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import { SVG } from '../../../assets/svg';
import { AlertGuideIcon } from '../../../assets/svg/AlertGuideIcon';
import { ExtendedButton, ExtendedText } from '../../../components';
import { JOINT_GROUNDING_EXERCISE_ID } from '../../../constants/quest';
import {
  useAppDispatch,
  useAppSelector,
  usePositiveNavigateTo,
} from '../../../hooks';
import { IQuest } from '../../../models/IQuest';
import { questSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { styles } from './EscapeMenu.styles';
import { IEscapeMenuScreenProps } from './EscapeMenu.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const EscapeMenuScreen: React.FC<IEscapeMenuScreenProps> = ({
  navigation,
  route,
}) => {
  const { escapeMenuAlternativeNavigateTo } = route.params.data;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const currentLanguage = useAppSelector(
    state => state.settings.settings.language ?? 'en',
  );
  const {
    currentDay,
    currentQuestIdx,
    currentQuestLine,
    isCurrentQuestCompleted,
    allQuests,
  } = useAppSelector(state => state.quest);
  const allLocalizedQuests = allQuests?.[currentLanguage];

  const navigateTo = usePositiveNavigateTo(escapeMenuAlternativeNavigateTo);

  const useNavigateQuestById = useCallback(() => {
    // navigation.popToTop();
    navigation.goBack();
    navigateTo();
  }, [navigateTo, navigation]);

  const goToTheCharmofGrounding = useCallback(() => {
    if (isCurrentQuestCompleted) {
      dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));
    }
    const quests: IQuest[] = values(
      allLocalizedQuests &&
        allLocalizedQuests[JOINT_GROUNDING_EXERCISE_ID].quests,
    );

    dispatch(
      questSlice.actions.saveCurrentQuestLine({
        id: quests[0].questLineId,
        quests,
      }),
    );

    dispatch(questSlice.actions.saveCurrentQuestIdx(0));
    navigation.popToTop();
    navigation.navigate(quests[0].type, {
      data: { ...quests[0] },
    });

    dispatch(questSlice.actions.clearQuestStack());
  }, [allLocalizedQuests, dispatch, isCurrentQuestCompleted, navigation]);

  const goToGarden = useCallback(() => {
    if (!isCurrentQuestCompleted) {
      dispatch(
        questSlice.actions.updateInterruptedQuestLine({
          id: currentQuestLine?.id as string,
          day: currentDay,
          interruptedQuestInx: currentQuestIdx,
        }),
      );
    }

    dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));
    navigation.goBack();
    navigation.push('GardenStack', {
      screen: 'Garden',
      params: {
        isFirstTime: false,
        isPlanting: false,
        isFirstTimeGarden: false,
      },
    });
  }, [
    currentDay,
    currentQuestIdx,
    currentQuestLine?.id,
    dispatch,
    isCurrentQuestCompleted,
    navigation,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={styles.backArrowImage}>
        <WhiteBackArrowIcon />
      </TouchableOpacity>
      <View style={[generalStyles.flex, generalStyles.jcCenter]}>
        <View style={styles.imageContainer}>
          <AlertGuideIcon />
        </View>
        <View style={styles.contentContainer}>
          <ExtendedText preset="heading" style={styles.title}>
            {t('screens.escape_menu.title')}
          </ExtendedText>
          <ExtendedText preset="secondary-text" style={styles.subtitle}>
            {t('screens.escape_menu.description')}
          </ExtendedText>
          <ExtendedButton
            onPress={goToTheCharmofGrounding}
            title={t('buttons.the_charm_of_grounding')}
            style={styles.button}
          />
          {escapeMenuAlternativeNavigateTo && (
            <ExtendedButton
              title={t('buttons.try_an_alternative')}
              style={styles.button}
              onPress={useNavigateQuestById}
            />
          )}
          <ExtendedButton
            title={t('buttons.back_to_clearing')}
            style={styles.button}
            onPress={goToGarden}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

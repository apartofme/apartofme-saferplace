import { values } from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedButton, ExtendedText } from '../../../components';
import {
  useAppDispatch,
  useAppSelector,
  usePositiveNavigateTo,
} from '../../../hooks';
import { IQuest } from '../../../models/IQuest';
import { questSlice } from '../../../redux/slices';
import { styles } from './EscapeMenu.styles';
import { IEscapeMenuScreenProps } from './EscapeMenu.types';

export const EscapeMenuScreen: React.FC<IEscapeMenuScreenProps> = ({
  navigation,
  route,
}) => {
  const { escapeMenuAlternativeNavigateTo } = route.params.data;

  const navigateTo = usePositiveNavigateTo(escapeMenuAlternativeNavigateTo);

  const useNavigateQuestById = useCallback(() => {
    // navigation.popToTop();
    navigation.goBack();
    navigateTo();
  }, [navigateTo, navigation]);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const currentLanguage = useAppSelector(
    state => state.settings.settings.language,
  );
  const allQuests = useAppSelector(
    state => state.quest.allQuests?.[currentLanguage as string],
  );

  const goToTheCharmofGrounding = useCallback(() => {
    const quests: IQuest[] = values(allQuests && allQuests['55705521'].quests);
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
  }, [allQuests, dispatch, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image source={IMAGES.WHITE_BACK_ARROW} style={styles.backArrowImage} />
      </TouchableOpacity>

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
        />
      </View>
    </SafeAreaView>
  );
};

import { values } from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import {
  useAppDispatch,
  useAppSelector,
  useParsedJSXTextNickname,
} from '../../../../../hooks';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../../components';
import { questSlice } from '../../../../../redux/slices';
import { COLORS } from '../../../../../themes/colors';
import { generalStyles } from '../../../../../utils/styles';
import { ISkipCharmAcknowledgementScreenProps } from './SkipCharmAcknowledgement.types';
import { SVG } from '../../../../../assets/svg';
import CONFIG from '../../../../../config/env';
import { BACKGROUND_IMAGES } from '../../../../../assets';
import { styles } from './SkipCharmAcknowledgement.styles';
import { IQuest } from '../../../../../models/IQuest';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const CompassionateGuideIcon = SVG.CompassionateGuideIcon;
const CelebrationGuideIcon = SVG.CelebrationGuideIcon;

export const SkipCharmAcknowledgementScreen: React.FC<ISkipCharmAcknowledgementScreenProps> =
  ({ navigation, route }) => {
    const { t } = useTranslation();
    const { isFirst } = route.params;
    const dispatch = useAppDispatch();
    const currentLanguage =
      useAppSelector(state => state.settings.settings.language) ??
      CONFIG.FALLBACK_LANGUAGE;
    const allQuests = useAppSelector(
      state => state.quest.allQuests?.[currentLanguage],
    );

    const interruptedQuestLine = useAppSelector(
      state => state.quest.interruptedQuestLine,
    );

    const onSubmit = useCallback(() => {
      if (isFirst) {
        navigation.push('SkipCharmEmojiSelection', { isChild: false });
        return;
      }
      if (interruptedQuestLine) {
        const interruptedQuests = values(
          allQuests?.[+interruptedQuestLine.id].quests,
        );
        // dispatch(questSlice.actions.updateCurrentDayQuestsStack());
        dispatch(questSlice.actions.updateInterruptedQuestLine(null));

        navigation.push('QuestStack', {
          screen: 'ElixirDoubleInteraction',
          params: {
            data: {
              title: t('screens.skip_charm.double_interaction'),
              elixirReward:
                interruptedQuests[interruptedQuests.length - 1].elixirReward,
            } as IQuest,
          },
        });
      }
    }, [allQuests, dispatch, interruptedQuestLine, isFirst, navigation, t]);

    const Title = useParsedJSXTextNickname({
      text: t(
        isFirst
          ? 'screens.skip_charm_acknowledgement.first.title'
          : 'screens.skip_charm_acknowledgement.second.title',
      ),
      textHasNickname: true,
      preset: 'large-title',
      style: styles.title,
      variableStyle: { color: COLORS.PRIMARY_ORANGE },
    });

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            isArrow={true}
            onSubmit={onSubmit}
            style={styles.container}>
            {isFirst ? <CompassionateGuideIcon /> : <CelebrationGuideIcon />}
            <Title />
            <ExtendedText
              preset="secondary-text"
              style={generalStyles.greyCenter}>
              {t(
                isFirst
                  ? 'screens.skip_charm_acknowledgement.first.description'
                  : 'screens.skip_charm_acknowledgement.second.description',
              )}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

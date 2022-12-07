import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
  useAppSelector,
  useAppDispatch,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementSuccessivelyScreenProps } from './AcknowledgementSuccessively.types';
import { styles } from './AcknowledgementSuccessively.styles';
import { CHARMS_SVG } from '../../../../assets/svg';
import { ANIMATIONS } from '../../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../../utils';
import {
  DAY_14_CLOSING_DIALOGUE_ID,
  GO_TO_GARDEN,
} from '../../../../constants/quest';
import { CharmsSvgKeys } from '../../../../utils/types';
import { questSlice } from '../../../../redux/slices';

export const AcknowledgementSuccessivelyScreen: React.FC<IAcknowledgementSuccessivelyScreenProps> =
  ({ navigation, route }) => {
    const {
      title,
      description,
      tellMoreTitle,
      buttonTitle,
      image,
      backgroundImage,
      crossHeader,
      positiveNavigatesTo,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const dispatch = useAppDispatch();
    const {
      currentQuestLine,
      isCurrentQuestCompleted,
      currentDay,
      currentQuestIdx,
    } = useAppSelector(state => state.quest);

    const { t } = useTranslation();

    const positiveNavigateTo = usePositiveNavigateTo(positiveNavigatesTo);

    const onSubmit = useCallback(() => {
      if (tellMoreTitle === GO_TO_GARDEN && currentQuestLine) {
        if (isCurrentQuestCompleted) {
          dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));

          navigation.replace('GardenStack', {
            screen: 'Garden',
            params: {
              isFirstTime: false,
              isPlanting: false,
              isFirstTimeGarden: false,
            },
          });
          return;
        }

        dispatch(
          questSlice.actions.updateInterruptedQuestLine({
            id: currentQuestLine.id,
            day: currentDay,
            interruptedQuestInx: currentQuestIdx + 1,
          }),
        );

        navigation.replace('GardenStack', {
          screen: 'Garden',
          params: {
            isFirstTime: false,
            isPlanting: false,
            isFirstTimeGarden: false,
          },
        });
        return;
      }

      positiveNavigateTo();
    }, [
      currentDay,
      currentQuestIdx,
      currentQuestLine,
      dispatch,
      isCurrentQuestCompleted,
      navigation,
      positiveNavigateTo,
      tellMoreTitle,
    ]);

    const currentQuest = useAppSelector(state => state.quest.currentQuestLine);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'large-title',
      style: styles.title,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const Icon = image && CHARMS_SVG[image as CharmsSvgKeys];

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        {currentQuest?.id === DAY_14_CLOSING_DIALOGUE_ID && (
          <Lottie
            source={ANIMATIONS.LEAF_CONFETTI}
            autoPlay
            loop={false}
            style={LottieAbsoluteStyles(-30)}
          />
        )}
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            isArrow={!buttonTitle}
            onSubmit={onSubmit}
            style={styles.container}>
            {!!Icon && <Icon reduceSize={true} />}
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

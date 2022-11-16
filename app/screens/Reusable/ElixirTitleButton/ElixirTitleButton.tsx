import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';

import { IElixirTitleButtonScreenProps } from './ElixirTitleButton.types';
import {
  useAppDispatch,
  useAppSelector,
  useInternetCheck,
} from '../../../hooks';
import { BottomButtonView, ExtendedText } from '../../../components';
import {
  getElixirAnimationKeyByRange,
  LottieAbsoluteStyles,
} from '../../../utils';
import { generalStyles } from '../../../utils/styles';
import { styles } from './ElixirTitleButton.styles';
import { questSlice } from '../../../redux/slices';
import { JOINT_GROUNDING_EXERCISE_ID } from '../../../constants/quest';
import { BACKGROUND_IMAGES } from '../../../assets';
import { ANIMATIONS, POTION_FILL_ANIMATIONS } from '../../../assets/animations';
import { PotionFillKeys } from '../../../utils/types';

export const ElixirTitleButtonScreen: React.FC<IElixirTitleButtonScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useInternetCheck(
      'errors.network_progress.title',
      'errors.network_progress.description',
    );

    const { fullnessElixir } = useAppSelector(state => state.elixir);
    const { interruptedQuestLine, currentQuestLine, isFirstTimeGrounding } =
      useAppSelector(state => state.quest);

    const animation = useMemo(() => {
      const from = getElixirAnimationKeyByRange(fullnessElixir - 0.5).replace(
        'Icon',
        '',
      );
      const to = getElixirAnimationKeyByRange(fullnessElixir).replace(
        'Icon',
        '',
      );

      return POTION_FILL_ANIMATIONS[`${from}To${to}` as PotionFillKeys];
    }, [fullnessElixir]);

    const buttonTitle = useMemo(() => {
      if (fullnessElixir && fullnessElixir >= 3) {
        return t('buttons.plant_a_plant');
      }
      return t('buttons.back_to_clearing');
    }, [fullnessElixir, t]);

    const title = useMemo(() => {
      if (fullnessElixir && fullnessElixir >= 3) {
        return t('screens.elixir_title_button.title');
      }
      return null;
    }, [fullnessElixir, t]);

    const onSabmit = useCallback(() => {
      if (interruptedQuestLine?.id === currentQuestLine?.id) {
        dispatch(questSlice.actions.updateInterruptedQuestLine(null));
      }
      if (currentQuestLine?.id) {
        dispatch(
          questSlice.actions.saveCompletedQuestsId(+currentQuestLine?.id),
        );
      }
      if (fullnessElixir && fullnessElixir >= 3) {
        if (currentQuestLine?.id === JOINT_GROUNDING_EXERCISE_ID) {
          if (!isFirstTimeGrounding) {
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

          navigation.push('GardenStack', {
            screen: 'GardenTutorialDialog',
            params: { isStart: true },
          });
          return;
        }

        navigation.replace('GardenStack', {
          screen: 'Garden',
          params: {
            isFirstTime: false,
            isPlanting: true,
            isFirstTimeGarden: false,
          },
        });
        return;
      }

      navigation.replace('GardenStack', {
        screen: 'Garden',
        params: {
          isFirstTime: false,
          isPlanting: false,
          isFirstTimeGarden: false,
        },
      });
    }, [
      currentQuestLine?.id,
      dispatch,
      fullnessElixir,
      interruptedQuestLine?.id,
      isFirstTimeGrounding,
      navigation,
    ]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <Lottie
          source={ANIMATIONS.LEAF_CONFETTI}
          autoPlay
          loop={false}
          style={LottieAbsoluteStyles(-30)}
        />
        <Lottie
          source={animation}
          progress={1}
          loop={false}
          style={LottieAbsoluteStyles(-20)}
        />
        <SafeAreaView style={generalStyles.flex}>
          <BottomButtonView
            buttonTitle={buttonTitle}
            onSubmit={onSabmit}
            style={styles.container}>
            {title && (
              <ExtendedText preset="title" style={styles.title}>
                {title}
              </ExtendedText>
            )}
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

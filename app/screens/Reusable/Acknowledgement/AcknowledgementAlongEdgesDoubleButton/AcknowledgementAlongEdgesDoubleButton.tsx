import React, { useMemo } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { IAcknowledgementAlongEdgesDoubleButtonScreenProps } from './AcknowledgementAlongEdgesDoubleButton.types';
import { styles } from './AcknowledgementAlongEdgesDoubleButton.styles';
import {
  useAppSelector,
  useIsChildMove,
  useNegativeNavigateTo,
  useParsedJSXTextNickname,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../../hooks';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { BottomButtonView, ExtendedText } from '../../../../components';
import { AVATARS_SVG, CHARMS_SVG } from '../../../../assets/svg';

export const AcknowledgementAlongEdgesDoubleButtonScreen: React.FC<IAcknowledgementAlongEdgesDoubleButtonScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      tellMoreTitle,
      image,
      backgroundImage,
      crossHeader,
      titleHasNickname,
      positiveNavigatesTo,
      negativeNavigatesTo,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const positiveNavigate = usePositiveNavigateTo(positiveNavigatesTo);
    const negativeNavigate = useNegativeNavigateTo(negativeNavigatesTo, true);
    const { parent, child } = useAppSelector(state => state.user);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: generalStyles.brilliantWhiteCenter,
    });

    const Description = useParsedJSXTextNickname({
      text: description ?? '',
      textHasNickname: titleHasNickname ?? true,
      preset: 'secondary-text',
      style: styles.description,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const isChild = useIsChildMove(title);

    const Icon = useMemo(() => {
      if (image) {
        return CHARMS_SVG[image];
      }

      if (isChild) {
        return AVATARS_SVG[child?.avatar ?? 'CircleBearIcon'];
      }

      return AVATARS_SVG[parent?.avatar ?? 'CircleRabbitIcon'];
    }, [child?.avatar, image, isChild, parent?.avatar]);

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            isArrow={!buttonTitle}
            onSubmit={positiveNavigate}
            style={styles.container}>
            <Title />
            <View style={generalStyles.aiCenter}>
              {Icon && <Icon />}
              <Description />
            </View>
          </BottomButtonView>
          <TouchableOpacity
            onPress={negativeNavigate}
            style={styles.bottomButton}>
            <ExtendedText
              preset="secondary-text"
              style={generalStyles.brilliantWhite}>
              {tellMoreTitle}
            </ExtendedText>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  };

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementDoubleImageScreenProps } from './AcknowledgementDoubleImage.types';
import { styles } from './AcknowledgementDoubleImage.styles';
import { DOUBLE_AVATARS_SVG } from '../../../../assets/svg';

export const AcknowledgementDoubleImageScreen: React.FC<IAcknowledgementDoubleImageScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      backgroundImage,
      titleHasNickname,
      crossHeader,
      positiveNavigatesTo,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    //const parentAvatar =
    //  useAppSelector(state => state.user.parent?.avatar) ??
    //  `Circle${AvatarsNameType.Rabbit}`;
    //const childAvatar =
    //  useAppSelector(state => state.user.child?.avatar) ??
    //  `Circle${AvatarsNameType.Bear}`;
    const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: generalStyles.brilliantWhiteCenter,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    //const AvatarsIcon = DOUBLE_AVATARS_SVG[`${parentAvatar}${childAvatar}`];

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
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <View style={styles.imageContainer}>
              {/* // TODO: change to real icon */}
              <DOUBLE_AVATARS_SVG.CircleFoxIconCircleMonkeyIcon />
            </View>
            <View style={generalStyles.flex} />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
  useAppSelector,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementDoubleImageScreenProps } from './AcknowledgementDoubleImage.types';
import { styles } from './AcknowledgementDoubleImage.styles';
import { DOUBLE_AVATARS_SVG } from '../../../../assets/svg';
import { AVATAR_POSTFIX, AVATAR_PREFIX } from '../../../../constants/avatar';

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
    const { parent, child } = useAppSelector(state => state.user);
    const parentAvatar = parent?.avatar
      ?.replace(AVATAR_PREFIX, '')
      .replace(AVATAR_POSTFIX, '');
    const childAvatar = child?.avatar
      ?.replace(AVATAR_PREFIX, '')
      .replace(AVATAR_POSTFIX, '');
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

    const AvatarsIcon =
      DOUBLE_AVATARS_SVG[
        `${parentAvatar}${childAvatar}` as keyof typeof DOUBLE_AVATARS_SVG
      ];

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
            {AvatarsIcon && (
              <View style={styles.iconContainer}>
                <AvatarsIcon />
              </View>
            )}
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

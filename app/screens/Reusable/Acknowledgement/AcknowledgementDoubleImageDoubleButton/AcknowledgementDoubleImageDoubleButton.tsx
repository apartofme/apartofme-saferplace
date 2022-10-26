import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
  useNegativeNavigateTo,
  useAppSelector,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementDoubleImageDoubleButtonScreenProps } from './AcknowledgementDoubleImageDoubleButton.types';
import { styles } from './AcknowledgementDoubleImageDoubleButton.styles';
import { DOUBLE_AVATARS_SVG } from '../../../../assets/svg';

export const AcknowledgementDoubleImageDoubleButtonScreen: React.FC<IAcknowledgementDoubleImageDoubleButtonScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      tellMoreTitle,
      backgroundImage,
      titleHasNickname,
      crossHeader,
      positiveNavigatesTo,
      negativeNavigatesTo,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const parentAvatar = useAppSelector(state => state.user.parent?.avatar)
      ?.replace('Circle', '')
      .replace('Icon', '');
    const childAvatar = useAppSelector(state => state.user.child?.avatar)
      ?.replace('Circle', '')
      .replace('Icon', '');

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

    const negativeNavigate = useNegativeNavigateTo(negativeNavigatesTo, true);

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
            <View>
              {AvatarsIcon && (
                <View style={styles.iconContainer}>
                  <AvatarsIcon />
                </View>
              )}
              <ExtendedText preset="secondary-text" style={styles.description}>
                {description}
              </ExtendedText>
            </View>
          </BottomButtonView>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={negativeNavigate}>
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

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { IMAGES } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParseTextWithNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementSuccessivelyScreenProps } from './AcknowledgementSuccessively.types';
import { styles } from './AcknowledgementSuccessively.styles';

export const AcknowledgementSuccessivelyScreen: React.FC<IAcknowledgementSuccessivelyScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      crossHeader,
      positiveNavigatesTo,
      titleHasNickname,
    } = route.params.data;

    const { t } = useTranslation();

    const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

    return (
      <ImageBackground
        // TODO: change to the real image
        source={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          {useRenderQuestHeader(crossHeader ?? false)}
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={onSubmit}
            style={styles.container}>
            <Image
              // TODO: change to the real image
              source={IMAGES.WHITE_PENCIL}
              style={styles.image}
            />
            {useParseTextWithNickname({
              text: title,
              textHasNickname: titleHasNickname ?? true,
              preset: 'large-title',
              style: styles.title,
            })}
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

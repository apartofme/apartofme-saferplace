import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParseTextWithNickname,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementDoubleImageScreenProps } from './AcknowledgementDoubleImage.types';
import { useNavigatePrevQuest } from '../../../../hooks';
import { styles } from './AcknowledgementDoubleImage.styles';

export const AcknowledgementDoubleImageScreen: React.FC<IAcknowledgementDoubleImageScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      crossHeader,
      positiveNavigatesTo,
    } = route.params.data;

    const { t } = useTranslation();

    const goBack = useNavigatePrevQuest();
    const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

    const renderHeader = useCallback(() => {
      if (crossHeader) {
        return (
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={goBack}
            // TODO: change to real image & function
            rightIcon={IMAGES.WHITE_BACK_ARROW}
            onRightIconPress={goBack}
          />
        );
      } else {
        return (
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={goBack}
          />
        );
      }
    }, [crossHeader, goBack]);

    return (
      <ImageBackground
        // TODO: change to the real image
        source={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          {renderHeader()}
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={onSubmit}
            style={styles.container}>
            <ExtendedText preset="title" style={styles.title}>
              {useParseTextWithNickname(title)}
            </ExtendedText>
            <View>
              <View style={styles.imageContainer}>
                <Image
                  // TODO: change to the real image
                  source={IMAGES.WHITE_PENCIL}
                  style={styles.image}
                />
                <Image
                  // TODO: change to the real image
                  source={IMAGES.WHITE_PENCIL}
                  style={[styles.image, styles.childImage]}
                />
              </View>
              <ExtendedText preset="secondary-text" style={styles.description}>
                {description}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

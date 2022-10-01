import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementNicknamesScreenProps } from './AcknowledgementNicknames.types';
import {
  useNavigatePrevQuest,
  useParseTextWithNickname,
  usePositiveNavigateTo,
} from '../../../../hooks';
import { styles } from './AcknowledgementNicknames.styles';

export const AcknowledgementNicknamesScreen: React.FC<IAcknowledgementNicknamesScreenProps> =
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
            <Image
              // TODO: change to the real image
              source={IMAGES.WHITE_PENCIL}
              style={styles.image}
            />

            <View>
              <ExtendedText style={styles.title}>
                {useParseTextWithNickname(title)}
              </ExtendedText>
              <ExtendedText preset="secondary-text" style={styles.description}>
                {description}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

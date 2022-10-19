import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './AcknowledgementSupport.styles';
import { IAcknowledgementSupportScreenProps } from './AcknowledgementSupport.types';
import { useNavigateNextQuest, useRenderQuestHeader } from '../../../../hooks';

export const AcknowledgementSupportScreen: React.FC<IAcknowledgementSupportScreenProps> =
  ({ navigation, route }) => {
    const {
      title,
      buttonTitle,
      crossHeader,
      description,
      image,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const onSubmit = useNavigateNextQuest();

    const { t } = useTranslation();

    const goToAlert = useCallback(() => {
      navigation.navigate('Alert');
    }, [navigation]);

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    return (
      <ImageBackground
        // TODO: change to the real image
        source={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={onSubmit}
            style={styles.container}>
            <ExtendedText preset="body-regular" style={styles.title}>
              {title}
            </ExtendedText>
            <Image
              source={(image && IMAGES[image]) ?? IMAGES.LOGO}
              style={styles.image}
            />
            <TouchableOpacity onPress={goToAlert}>
              <Image
                source={(image && IMAGES[image]) ?? IMAGES.LOGO}
                style={styles.infoImage}
              />
            </TouchableOpacity>
            <ExtendedText preset="secondary-text">{description}</ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

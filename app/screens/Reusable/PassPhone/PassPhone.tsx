import React, { useCallback } from 'react';
import { Image, ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IPassPhoneScreenProps } from './PassPhone.types';
import { styles } from './PassPhone.styles';
import {
  useNavigateNextQuest,
  useNavigatePrevQuest,
  useParseTextWithNickname,
} from '../../../hooks';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';

export const PassPhoneScreen: React.FC<IPassPhoneScreenProps> = ({ route }) => {
  const { t } = useTranslation();

  const goBack = useNavigatePrevQuest();
  const onSubmit = useNavigateNextQuest();

  const {
    title,
    description,
    buttonTitle,
    crossHeader,
    titleHasNickname,
    titleNicknameChanges,
  } = route.params.data;

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
          <Image source={IMAGES.WHITE_PENCIL} style={styles.avatar} />
          <ExtendedText preset="secondary-text" style={styles.description}>
            {description}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};

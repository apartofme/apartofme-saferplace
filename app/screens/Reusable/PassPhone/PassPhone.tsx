import React from 'react';
import { Image, ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IPassPhoneScreenProps } from './PassPhone.types';
import { styles } from './PassPhone.styles';
import {
  useNavigateNextQuest,
  useParseTextWithNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { BottomButtonView, ExtendedText } from '../../../components';
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';

export const PassPhoneScreen: React.FC<IPassPhoneScreenProps> = ({ route }) => {
  const { t } = useTranslation();

  const onSubmit = useNavigateNextQuest();

  const { title, description, buttonTitle, crossHeader, titleHasNickname } =
    route.params.data;

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
          {useParseTextWithNickname({
            text: title,
            textHasNickname: titleHasNickname ?? true,
            preset: 'title',
            style: styles.title,
          })}
          <Image source={IMAGES.WHITE_PENCIL} style={styles.avatar} />
          <ExtendedText preset="secondary-text" style={styles.description}>
            {description}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import {
  useNavigateNextQuest,
  useNavigatePrevQuest,
  useParsedJSXTextNickname,
} from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { styles } from './TryAgain.styles';
import { ITryAgainScreenProps } from './TryAgain.types';

export const TryAgainScreen: React.FC<ITryAgainScreenProps> = ({ route }) => {
  const { title, backgroundImage, titleHasNickname, description } =
    route.params.data;

  const goBack = useNavigatePrevQuest();
  const onSubmit = useNavigateNextQuest();

  const { t } = useTranslation();

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: styles.title,
    // TODO: remove
    nicknameStyle: { color: '#00dbc0' },
  });

  return (
    <ImageBackground source={backgroundImage} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={onSubmit}>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            rightIcon={IMAGES.WHITE_PENCIL}
            onLeftIconPress={goBack}
          />
          <View style={styles.container}>
            <Title />
            <View style={styles.imagesContainer}>
              <Image source={IMAGES.LOGO} style={styles.image} />
              <Image source={IMAGES.LOGO} style={styles.image} />
            </View>
            <ExtendedText style={styles.subtitle}>{description}</ExtendedText>
          </View>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { useNavigateNextQuest, useNavigatePrevQuest } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { styles } from './TryAgain.styles';
import { ITryAgainScreenProps } from './TryAgain.types';

export const TryAgainScreen: React.FC<ITryAgainScreenProps> = ({ route }) => {
  const { title } = route.params.data;

  const goBack = useNavigatePrevQuest();
  const onSubmit = useNavigateNextQuest();

  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.flex}>
      <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={onSubmit}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          rightIcon={IMAGES.WHITE_PENCIL}
          onLeftIconPress={goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>{t(title)}</ExtendedText>
          <View style={styles.imagesContainer}>
            <Image source={IMAGES.LOGO} style={styles.image} />
            <Image source={IMAGES.LOGO} style={styles.image} />
          </View>
          <ExtendedText style={styles.subtitle}>
            {t('screens.charm_alerts.try_again')}
          </ExtendedText>
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};

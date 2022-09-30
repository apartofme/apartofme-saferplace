import _ from 'lodash';
import React, { useCallback } from 'react';
import { Image, SafeAreaView, View } from 'react-native';

import { IRecognitionAcknowledgementScreenProps } from './RecognitionAcknowledgement.types';
import { styles } from './RecognitionAcknowledgement.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';
import { useTranslation } from 'react-i18next';
import { RECOGNITION_ACKNOWLEDGEMENT_DATA } from './RecognitionAcknowledgement.data';
import { useAppSelector } from '../../../hooks';

export const RecognitionAcknowledgementScreen: React.FC<IRecognitionAcknowledgementScreenProps> =
  ({ navigation, route }) => {
    const { type } = route.params.data;

    const { t } = useTranslation();

    const parentNickname = useAppSelector(
      state => state.user.child?.nickname,
    ) as string;
    const childNickname = useAppSelector(
      state => state.user.parent?.nickname,
    ) as string;

    const getNicknameTitle = useCallback(() => {
      const findedTitle =
        _.find(RECOGNITION_ACKNOWLEDGEMENT_DATA, item => item.type === type)
          ?.title ?? '';
      return (
        parentNickname + t('labels.and') + childNickname + ' ' + t(findedTitle)
      );
    }, [childNickname, parentNickname, t, type]);

    const onSubmitPress = useCallback(() => {
      navigation.navigate('ElixirCarousel');
    }, [navigation]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
          rightIcon={IMAGES.WHITE_PENCIL}
        />
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmitPress}>
          <View style={styles.container}>
            <Image source={IMAGES.LOGO} style={styles.image} />
            <ExtendedText style={styles.title}>
              {t(getNicknameTitle())}
            </ExtendedText>
            <ExtendedText style={styles.subtitle}>
              {t(
                _.find(
                  RECOGNITION_ACKNOWLEDGEMENT_DATA,
                  item => item.type === type,
                )?.subtitle ?? '',
              )}
            </ExtendedText>
          </View>
        </BottomButtonView>
      </SafeAreaView>
    );
  };

import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { styles } from './TrySomethingModal.styles';
import { ITrySomethingModalProps } from './TrySomethingModal.types';
import { generalStyles } from '../../../../../utils/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  BottomButtonView,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../../../components';
import { IMAGES } from '../../../../../assets';

export const TrySomethingModal: React.FC<ITrySomethingModalProps> = ({
  title,
  subtitle,
  setModalStatus,
  data,
}) => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState('');

  // const setTrySomethingData = useCallback(() => {
  //   const carouselDataCopy = _.cloneDeep(carouselData);
  //   carouselDataCopy[activeItemIndex].subtitle = inputValue;
  //   setCarouselData(carouselDataCopy);
  //   console.log(carouselData);
  // }, [activeItemIndex, carouselData, inputValue, setCarouselData]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        rightIcon={IMAGES.WHITE_PENCIL}
        onLeftIconPress={setModalStatus}
      />
      <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={_.noop}>
        <View style={styles.container}>
          <ExtendedText style={styles.title}>{t(title)}</ExtendedText>
          <ExtendedText style={styles.subtitle}>{t(subtitle)}</ExtendedText>
          <ExtendedTextInput value={inputValue} onChangeText={setInputValue} />
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};

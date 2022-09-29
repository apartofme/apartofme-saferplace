import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './TrySomethingModal.styles';
import { ITrySomethingModalProps } from './TrySomethingModal.types';
import { generalStyles } from '../../../../../utils/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../../../components';
import { IMAGES } from '../../../../../assets';
import { cacheSlice } from '../../../../../redux/slices';
import { useAppDispatch, useNavigateNextQuest } from '../../../../../hooks';

export const TrySomethingModal: React.FC<ITrySomethingModalProps> = ({
  title,
  subtitle,
  setModalStatus,
  data,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const onSubmit = useNavigateNextQuest();

  const [inputValue, setInputValue] = useState('');

  const onSubmitPress = useCallback(() => {
    data.subtitle = inputValue;
    dispatch(cacheSlice.actions.saveTrySomethingItem(data));
    onSubmit();
  }, [data, dispatch, inputValue, onSubmit]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        rightIcon={IMAGES.WHITE_PENCIL}
        onLeftIconPress={setModalStatus}
      />
      <ExtendedKeyboardAvoidingView>
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmitPress}>
          <View style={styles.container}>
            <ExtendedText style={styles.title}>{t(title)}</ExtendedText>
            <ExtendedText style={styles.subtitle}>{t(subtitle)}</ExtendedText>
            <ExtendedTextInput
              value={inputValue}
              onChangeText={setInputValue}
            />
          </View>
        </BottomButtonView>
      </ExtendedKeyboardAvoidingView>
    </SafeAreaView>
  );
};

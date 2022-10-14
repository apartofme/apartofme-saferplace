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
import {
  useAppDispatch,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
} from '../../../../../hooks';

export const TrySomethingModal: React.FC<ITrySomethingModalProps> = ({
  title,
  subtitle,
  titleHasNickname,
  setModalStatus,
  data,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const onSubmit = useNavigateNextQuest();

  const [inputValue, setInputValue] = useState('');

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    // TODO: remove
    nicknameStyle: { color: '#00dbc0' },
  });

  const onSubmitPress = useCallback(() => {
    data.subtitle = inputValue;
    dispatch(cacheSlice.actions.saveTrySomethingItem(t(data.title)));
    setModalStatus();
    onSubmit();
  }, [data, dispatch, inputValue, onSubmit, setModalStatus, t]);

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
          isDisabledButton={!inputValue}
          onSubmit={onSubmitPress}>
          <View style={styles.container}>
            <Title />
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

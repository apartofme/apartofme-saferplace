import React, { useCallback, useState } from 'react';
import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './TrySomethingModal.styles';
import { ITrySomethingModalProps } from './TrySomethingModal.types';
import { generalStyles } from '../../../../../utils/styles';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../../../components';
import { cacheSlice } from '../../../../../redux/slices';
import {
  useAppDispatch,
  useIsChildMove,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
} from '../../../../../hooks';
import { SVG } from '../../../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const WhiteCrossIcon = SVG.WhiteCrossIcon;

export const TrySomethingModal: React.FC<ITrySomethingModalProps> = ({
  title,
  subtitle,
  backgroundImage,
  titleHasNickname,
  isFirstPart,
  setModalStatus,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isChild = useIsChildMove(title);

  const onSubmit = useNavigateNextQuest();

  const [inputValue, setInputValue] = useState('');

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: styles.title,
  });

  const onSubmitPress = useCallback(() => {
    if (isFirstPart) {
      if (isChild) {
        dispatch(
          cacheSlice.actions.saveChildTrySomethingFirstItem({
            title: t('labels.create_own'),
            description: inputValue,
          }),
        );
      } else {
        dispatch(
          cacheSlice.actions.saveParentTrySomethingFirstItem({
            title: t('labels.create_own'),
            description: inputValue,
          }),
        );
      }
    } else {
      if (isChild) {
        dispatch(
          cacheSlice.actions.saveChildTrySomethingSecondItem({
            title: t('labels.create_own'),
            description: inputValue,
          }),
        );
      } else {
        dispatch(
          cacheSlice.actions.saveParentTrySomethingSecondItem({
            title: t('labels.create_own'),
            description: inputValue,
          }),
        );
      }
    }

    setModalStatus();
    onSubmit();
  }, [dispatch, inputValue, isChild, isFirstPart, onSubmit, setModalStatus, t]);

  return (
    <View style={generalStyles.flex}>
      <Image source={backgroundImage} style={generalStyles.backgroundImage} />
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          rightIcon={<WhiteCrossIcon />}
          onLeftIconPress={setModalStatus}
        />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            isDisabledButton={!inputValue}
            onSubmit={onSubmitPress}
            isArrow>
            <View style={styles.container}>
              <Title />
              <ExtendedText style={styles.subtitle}>{t(subtitle)}</ExtendedText>
              <ExtendedTextInput onChangeText={setInputValue} maxLength={30} />
              <ExtendedText
                preset="tertiary-text-regular"
                style={styles.maxCharacters}>
                {t('labels.maximum_characters')}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

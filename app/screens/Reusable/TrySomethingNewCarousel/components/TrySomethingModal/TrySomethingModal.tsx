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
  ITrySomethingItem,
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
import { COLORS } from '../../../../../themes/colors';

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
    const item: ITrySomethingItem = {
      id: 'createOwn',
      titleKey: 'labels.create_own',
      descriptionKey: inputValue,
      iconKey: 'AskForHelpIcon',
    };

    if (isFirstPart) {
      if (isChild) {
        dispatch(cacheSlice.actions.saveChildTrySomethingFirstItem(item));
      } else {
        dispatch(cacheSlice.actions.saveParentTrySomethingFirstItem(item));
      }
    } else {
      if (isChild) {
        dispatch(cacheSlice.actions.saveChildTrySomethingSecondItem(item));
      } else {
        dispatch(cacheSlice.actions.saveParentTrySomethingSecondItem(item));
      }
    }

    setModalStatus();
    onSubmit();
  }, [dispatch, inputValue, isChild, isFirstPart, onSubmit, setModalStatus]);

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
              <ExtendedTextInput
                onChangeText={setInputValue}
                maxLength={30}
                placeholderTextColor={COLORS.BRILLIANT_WHITE}
                placeholder={t('placeholders.enter_text')}
              />
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

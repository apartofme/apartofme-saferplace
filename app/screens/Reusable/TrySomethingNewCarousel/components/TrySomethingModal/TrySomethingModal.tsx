import React, { useCallback, useState } from 'react';
import { ImageBackground, View } from 'react-native';
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
import { SVG_ICONS } from '../../../../../assets/svg';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;
const WhiteCrossIcon = SVG_ICONS.WhiteCrossIcon;

export const TrySomethingModal: React.FC<ITrySomethingModalProps> = ({
  title,
  subtitle,
  backgroundImage,
  titleHasNickname,
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
    // TODO: remove
    variableStyle: { color: '#00dbc0' },
  });

  const onSubmitPress = useCallback(() => {
    if (isChild) {
      dispatch(
        cacheSlice.actions.saveChildTrySomethingItem({
          title: t('labels.create_own'),
          description: inputValue,
        }),
      );
    } else {
      dispatch(
        cacheSlice.actions.saveParentTrySomethingItem({
          title: t('labels.create_own'),
          description: inputValue,
        }),
      );
    }

    setModalStatus();
    onSubmit();
  }, [dispatch, inputValue, isChild, onSubmit, setModalStatus, t]);

  return (
    <ImageBackground source={backgroundImage} style={generalStyles.flex}>
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
    </ImageBackground>
  );
};

import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../../../assets';
import { SVG } from '../../../../../assets/svg';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  MultilineTextInput,
} from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import { styles } from './SkipCharmJournal.styles';
import { ISkipCharmJournalScreenProps } from './SkipCharmJournal.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SkipCharmJournalScreen: React.FC<ISkipCharmJournalScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const [text, setText] = useState('');

  const onSubmit = useCallback(() => {
    navigation.push('SkipCharmAcknowledgement', {
      isFirst: false,
    });
  }, [navigation]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.GARDEN_DARK}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.finish')}
          onSubmit={onSubmit}
          style={styles.container}>
          <ExtendedText preset="title" style={generalStyles.brilliantWhite}>
            {t('screens.skip_charm_journal.title')}
          </ExtendedText>
          <View style={styles.inputContainer}>
            <MultilineTextInput
              onChangeText={setText}
              value={text}
              placeholder={t('placeholders.enter_text')}
            />
          </View>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};

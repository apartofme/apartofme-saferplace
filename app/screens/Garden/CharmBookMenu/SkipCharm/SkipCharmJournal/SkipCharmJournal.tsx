import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MultilineTextInput,
} from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import { ISkipCharmJournalScreenProps } from './SkipCharmJournal.types';

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
      // TODO: change to real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        {/* <Header /> */}
        <BottomButtonView
          buttonTitle={t('buttons.select')}
          onSubmit={onSubmit}
          // style={styles.container}
        >
          <ExtendedText>{t('screens.skip-charm-journal.title')}</ExtendedText>
          <MultilineTextInput onChangeText={setText} value={text} />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};

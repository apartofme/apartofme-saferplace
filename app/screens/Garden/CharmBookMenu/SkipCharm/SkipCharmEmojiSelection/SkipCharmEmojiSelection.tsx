import React, { useCallback, useMemo, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { generalStyles } from '../../../../../utils/styles';
import { ISkipCharmEmojiSelectionScreenProps } from './SkipCharmEmojiSelection.types';
import { useParsedJSXTextNickname } from '../../../../../hooks';
import {
  BottomButtonView,
  EmojiSlider,
  ExtendedText,
} from '../../../../../components';

export const SkipCharmEmojiSelectionScreen: React.FC<ISkipCharmEmojiSelectionScreenProps> =
  ({ navigation, route }) => {
    const { t } = useTranslation();
    const { isChild } = route.params;

    const [emoji, setEmoji] = useState('');

    const title = useMemo(() => {
      if (isChild) {
        return t('screens.skip-charm-emoji-selection.child');
      }
      return t('screens.skip-charm-emoji-selection.parent');
    }, [isChild, t]);

    const onSubmit = useCallback(() => {
      if (isChild) {
        navigation.push('SkipCharmJournal');
        return;
      }
      navigation.push('SkipCharmEmojiSelection', { isChild: true });
    }, [isChild, navigation]);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: true,
      preset: 'title',
      //   style: styles.title,
      // TODO: remove
      variableStyle: { color: '#00dbc0' },
    });

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
            <Title />
            <ExtendedText>{t(emoji)}</ExtendedText>
            <EmojiSlider setEmojiKey={setEmoji} />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

import React, { useCallback, useMemo, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './SkipCharmEmojiSelection.styles';

import { generalStyles } from '../../../../../utils/styles';
import { ISkipCharmEmojiSelectionScreenProps } from './SkipCharmEmojiSelection.types';
import { useAppDispatch, useParsedJSXTextNickname } from '../../../../../hooks';
import { EmojiButtons, MainHeader } from '../../../../../components';
import { SVG } from '../../../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../../../assets';
import { questSlice } from '../../../../../redux/slices';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SkipCharmEmojiSelectionScreen: React.FC<ISkipCharmEmojiSelectionScreenProps> =
  ({ navigation, route }) => {
    const { t } = useTranslation();
    const { isChild } = route.params;

    const [emoji, setEmoji] = useState('');
    const dispatch = useAppDispatch();

    const title = useMemo(() => {
      if (isChild) {
        return t('screens.skip_charm_emoji_selection.child');
      }
      return t('screens.skip_charm_emoji_selection.parent');
    }, [isChild, t]);

    const onSubmit = useCallback(() => {
      if (isChild) {
        const currentDate = moment().format('L');
        dispatch(
          questSlice.actions.saveDailyCheck({
            [currentDate]: emoji,
          }),
        );
        navigation.push('SkipCharmJournal');
        return;
      }
      navigation.push('SkipCharmEmojiSelection', { isChild: true });
    }, [dispatch, emoji, isChild, navigation]);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: true,
      preset: 'title',
      style: styles.title,
    });

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN_BACKGROUND}
        style={generalStyles.flex}>
        <SafeAreaView edges={['top']} style={generalStyles.flex}>
          <View style={styles.topContainer}>
            <MainHeader
              leftIcon={<WhiteBackArrowIcon />}
              onLeftIconPress={navigation.goBack}
            />
            <Title />
          </View>
          <EmojiButtons
            buttonTitle={t('buttons.select')}
            onSubmit={onSubmit}
            setEmojiKey={setEmoji}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  };

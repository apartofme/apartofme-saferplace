import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { ExtendedButton, ExtendedText } from '../../../../../components';
import { useParsedJSXTextNickname } from '../../../../../hooks';
import { COLORS } from '../../../../../themes/colors';
import { generalStyles } from '../../../../../utils/styles';
import { ICompletedCharmEndScreenProps } from './CompletedCharmEnd.types';

export const CompletedCharmEndScreen: React.FC<ICompletedCharmEndScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const Title = useParsedJSXTextNickname({
      text: t('screens.completed-charm-end.title'),
      textHasNickname: true,
      preset: 'title',
      // style: styles.title,
      variableStyle: { color: COLORS.PRIMARY_ORANGE },
    });

    const onSabmit = useCallback(() => {
      navigation.push('GardenStack', {
        screen: 'Garden',
        params: {
          isFirstTime: false,
          isPlanting: false,
          isFirstTimeGarden: false,
        },
      });
    }, [navigation]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        {/* // TODO: uncoment when icon will be done */}
        {/* <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        /> */}
        {/* // TODO: change to real image */}
        {/* <Image source={IMAGES.LOGO} /> */}
        <Title />
        <ExtendedText>
          {t('screens.completed-charm-end.description')}
        </ExtendedText>
        <ExtendedButton title="buttons.next" onPress={onSabmit} />
      </SafeAreaView>
    );
  };

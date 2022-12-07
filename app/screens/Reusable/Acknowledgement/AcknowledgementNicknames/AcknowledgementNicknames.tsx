import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BottomButtonView } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementNicknamesScreenProps } from './AcknowledgementNicknames.types';
import {
  useIsChildMove,
  useParsedJSXTextNickname,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../../hooks';
import { styles } from './AcknowledgementNicknames.styles';
import { CHARMS_SVG } from '../../../../assets/svg';

export const AcknowledgementNicknamesScreen: React.FC<IAcknowledgementNicknamesScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      image,
      crossHeader,
      titleHasNickname,
      positiveNavigatesTo,
      backgroundImage,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();

    const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);
    const isChild = useIsChildMove(title);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: styles.title,
    });

    const Description = useParsedJSXTextNickname({
      text: description ?? '',
      textHasNickname: titleHasNickname ?? true,
      isChild,
      preset: 'tertiary-text-regular',
      style: styles.description,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const Icon = image && CHARMS_SVG[image];

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            onSubmit={onSubmit}
            isArrow
            style={styles.container}>
            {!!Icon && <Icon />}

            <View style={generalStyles.aiCenter}>
              <Title />
              <Description />
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

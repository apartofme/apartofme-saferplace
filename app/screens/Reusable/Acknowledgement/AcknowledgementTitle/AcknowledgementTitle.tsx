import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './AcknowledgementTitle.styles';
import { IAcknowledgementTitleScreenProps } from './AcknowledgementTitle.types';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { CHARMS_SVG } from '../../../../assets/svg';

export const AcknowledgementTitleScreen: React.FC<IAcknowledgementTitleScreenProps> =
  ({ route }) => {
    const { t } = useTranslation();

    const {
      title,
      titleHasNickname,
      crossHeader,
      buttonTitle,
      escapeMenuAlternativeNavigateTo,
      backgroundImage,
      image,
    } = route.params.data;

    const onSubmit = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'large-title',
      style: styles.title,
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
            {Icon && <Icon height={372} width={270} />}
            <Title />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ITroublesomeSpiritQuestionScreenProps } from './TroublesomeSpiritQuestion.types';
import { styles } from './TroublesomeSpiritQuestion.styles';
import { BottomButtonView, ExtendedText } from '../../../components';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { CHARMS_SVG } from '../../../assets/svg';

export const TroublesomeSpiritQuestionScreen: React.FC<ITroublesomeSpiritQuestionScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      crossHeader,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
      backgroundImage,
      image,
    } = route.params.data;

    const { t } = useTranslation();
    const onSubmit = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
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
            isArrow
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                {!!Icon && <Icon width={96} height={96} />}
                <ExtendedText preset="heading" style={styles.subtitle}>
                  {description}
                </ExtendedText>
              </View>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './AcknowledgementSupport.styles';
import { IAcknowledgementSupportScreenProps } from './AcknowledgementSupport.types';
import {
  useAppSelector,
  useNavigateNextQuest,
  useRenderQuestHeader,
} from '../../../../hooks';
import { CHARMS_SVG, SVG } from '../../../../assets/svg';
import { THE_CHARM_OF_SANCTUARY_ID } from '../../../../constants/quest';

const OrangeQuestionMarkIcon = SVG.OrangeQuestionMarkIcon;
const InfoIcon = SVG.InfoIcon;

export const AcknowledgementSupportScreen: React.FC<IAcknowledgementSupportScreenProps> =
  ({ navigation, route }) => {
    const {
      title,
      buttonTitle,
      crossHeader,
      description,
      image,
      escapeMenuAlternativeNavigateTo,
      backgroundImage,
    } = route.params.data;

    const { t } = useTranslation();

    const currentQuestLine = useAppSelector(
      state => state.quest.currentQuestLine,
    );

    const onSubmit = useNavigateNextQuest();

    const goToAlert = useCallback(() => {
      navigation.navigate('Alert');
    }, [navigation]);

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const isCharmOfSanctuary = useMemo(
      () => currentQuestLine?.id === THE_CHARM_OF_SANCTUARY_ID,
      [currentQuestLine?.id],
    );

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
            <ExtendedText preset="body-regular" style={styles.title}>
              {title}
            </ExtendedText>
            {!!Icon && (
              <View style={styles.imageContainer}>
                <Icon width={280} height={300} />
              </View>
            )}
            <TouchableOpacity onPress={goToAlert} disabled={isCharmOfSanctuary}>
              {isCharmOfSanctuary ? <InfoIcon /> : <OrangeQuestionMarkIcon />}
            </TouchableOpacity>
            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import {
  useAppSelector,
  useIsChildMove,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementAlongEdgesScreenProps } from './AcknowledgementAlongEdges.types';
import { styles } from './AcknowledgementAlongEdges.styles';
import { AVATARS_SVG, CHARMS_SVG } from '../../../../assets/svg';

export const AcknowledgementAlongEdgesScreen: React.FC<IAcknowledgementAlongEdgesScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      image,
      backgroundImage,
      crossHeader,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const onSubmit = useNavigateNextQuest();
    const parentAvatar =
      useAppSelector(state => state.user.parent?.avatar) ?? 'CircleRabbitIcon';
    const childAvatar =
      useAppSelector(state => state.user.child?.avatar) ?? 'CircleBearIcon';

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: generalStyles.brilliantWhiteCenter,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const isChild = useIsChildMove(title);

    const Icon = useMemo(() => {
      if (image) {
        return CHARMS_SVG[image];
      }
      if (isChild) {
        return AVATARS_SVG[childAvatar];
      }
      return AVATARS_SVG[parentAvatar];
    }, [childAvatar, image, isChild, parentAvatar]);

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
            isArrow={!buttonTitle}
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <View style={generalStyles.aiCenter}>
              {Icon && <Icon />}
              <ExtendedText style={styles.description}>
                {description}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import _ from 'lodash';

import { BottomButtonView } from '../../../../components';
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
import {
  DatoCMSTextVariables,
  THE_CHARM_OF_ACCEPTANCE_ID,
} from '../../../../constants/quest';

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
    const currentQuestLineId = useAppSelector(
      state => state.quest.currentQuestLine?.id,
    );
    const { troublesomeSpiritQuestionsItem } = useAppSelector(
      state => state.cache,
    );

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: generalStyles.brilliantWhiteCenter,
    });

    const Description = useParsedJSXTextNickname({
      text: description ?? '',
      textHasNickname: titleHasNickname ?? true,
      preset: 'secondary-text',
      style: styles.description,
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
      if (
        currentQuestLineId === THE_CHARM_OF_ACCEPTANCE_ID &&
        _.includes(t(title), DatoCMSTextVariables.TroublesomeSpiritQuestion)
      ) {
        return CHARMS_SVG[
          troublesomeSpiritQuestionsItem?.image ?? 'LoveRabbitIcon'
        ];
      }
      if (isChild) {
        return AVATARS_SVG[childAvatar];
      }

      return AVATARS_SVG[parentAvatar];
    }, [
      childAvatar,
      currentQuestLineId,
      image,
      isChild,
      parentAvatar,
      t,
      title,
      troublesomeSpiritQuestionsItem?.image,
    ]);

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
              <Description />
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

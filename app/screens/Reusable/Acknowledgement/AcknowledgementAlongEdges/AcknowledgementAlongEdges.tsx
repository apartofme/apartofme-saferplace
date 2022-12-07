import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
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
  THE_CHARM_OF_ACCEPTANCE_PART_TWO_ID,
} from '../../../../constants/quest';
import { CharmsSvgKeys } from '../../../../utils/types';

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
    const { parent, child } = useAppSelector(state => state.user);
    const currentQuestLineId = useAppSelector(
      state => state.quest.currentQuestLine?.id,
    );
    const { troublesomeItem } = useAppSelector(state => state.cache);

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
    const isTroublesomeSpirit = useMemo(
      () =>
        currentQuestLineId === THE_CHARM_OF_ACCEPTANCE_PART_TWO_ID &&
        _.includes(t(title), DatoCMSTextVariables.TroublesomeSpiritQuestion),
      [currentQuestLineId, t, title],
    );

    const Icon = useMemo(() => {
      if (image) {
        return CHARMS_SVG[image as CharmsSvgKeys];
      }
      if (isTroublesomeSpirit && troublesomeItem) {
        return CHARMS_SVG[troublesomeItem.iconKey];
      }
      if (isChild) {
        return AVATARS_SVG[child?.avatar ?? 'CircleBearIcon'];
      }

      return AVATARS_SVG[parent?.avatar ?? 'CircleRabbitIcon'];
    }, [
      child?.avatar,
      image,
      isChild,
      isTroublesomeSpirit,
      parent?.avatar,
      troublesomeItem,
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
            {!!Icon && (
              <Icon
                height={image || isTroublesomeSpirit ? 240 : 325}
                width={image || isTroublesomeSpirit ? 240 : 325}
              />
            )}
            <Description />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

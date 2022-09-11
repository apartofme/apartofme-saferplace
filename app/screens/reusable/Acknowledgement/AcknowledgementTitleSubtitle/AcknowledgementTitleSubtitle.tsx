import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, View } from 'react-native';
import _ from 'lodash';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { useAppSelector } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { Nullable, parseTextWithNickname } from '../../../../utils';
import { IParseTextWithNicknameResult } from '../../../../utils/types';
import { IAcknowledgementTitleSubtitleScreenProps } from './AcknowledgementTitleSubtitle.props';
import { AcknowledgementTitleSubtitleType } from './AcknowledgementTitleSubtitle.data';

export const AcknowledgementTitleSubtitleScreen: React.FC<IAcknowledgementTitleSubtitleScreenProps> =
  ({ navigation, route }) => {
    const {
      titleKey,
      subtitleKey,
      type,
      isCrossHeader,
      isTitleHaveNickname,
      image,
      backgroundImage,
      onSubmit,
    } = route.params.data;
    const { t } = useTranslation();
    const [titleInfo, setTitleInfo] =
      useState<Nullable<IParseTextWithNicknameResult>>(null);

    if (isTitleHaveNickname) {
      setTitleInfo(parseTextWithNickname(titleKey));
    }

    const nickName = useAppSelector(state =>
      _.find(state.user, titleInfo?.nicknameType),
    );

    const renderHeader = useCallback(() => {
      if (isCrossHeader) {
        return (
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={navigation.goBack}
            // TODO: change to real image & function
            rightIcon={IMAGES.WHITE_BACK_ARROW}
            onRightIconPress={navigation.goBack}
          />
        );
      } else {
        return (
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={navigation.goBack}
          />
        );
      }
    }, [isCrossHeader, navigation]);

    const renderTitle = useCallback(() => {
      if (isTitleHaveNickname) {
        return (
          <View style={generalStyles.row}>
            {_.map(titleInfo?.textArray, (item: string) => {
              if (item === titleInfo?.nicknameType) {
                return <ExtendedText>{nickName}</ExtendedText>;
              } else {
                return <ExtendedText>{t(item)}</ExtendedText>;
              }
            })}
          </View>
        );
      } else {
        return <ExtendedText>{t(titleKey)}</ExtendedText>;
      }
    }, [isTitleHaveNickname, nickName, t, titleInfo, titleKey]);

    const renderContent = useCallback(() => {
      if (type === AcknowledgementTitleSubtitleType.AlongEdges) {
        return (
          <View>
            {renderTitle()}
            <Image source={image} />
            <ExtendedText>{t(subtitleKey)}</ExtendedText>
          </View>
        );
      } else {
        return (
          <View>
            {renderTitle()}
            <Image source={image} />
            <ExtendedText>{t(subtitleKey)}</ExtendedText>
          </View>
        );
      }
    }, [image, renderTitle, subtitleKey, t, type]);

    return (
      <ImageBackground source={backgroundImage} style={generalStyles.flex}>
        {renderHeader()}
        <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={onSubmit}>
          {renderContent()}
        </BottomButtonView>
      </ImageBackground>
    );
  };

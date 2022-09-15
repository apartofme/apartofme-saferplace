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
import { useMount } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { Nullable, parseTextWithNickname } from '../../../../utils';
import { NicknameType } from '../../../../utils/types';
import { IAcknowledgementSuccessivelyScreenProps } from './AcknowledgementSuccessively.types';
import {
  DUMMY_CHILD_NICKNAME,
  DUMMY_PARENT_NICKNAME,
} from './AcknowledgementSuccessively.dummy';

export const AcknowledgementSuccessivelyScreen: React.FC<IAcknowledgementSuccessivelyScreenProps> =
  ({ navigation, route }) => {
    const {
      titleKey,
      subtitleKey,
      isCrossHeader,
      isTitleHaveNickname,
      image,
      backgroundImage,
      onSubmit,
    } = route.params.data;

    const { t } = useTranslation();
    const [titleArray, setTitleArray] = useState<Nullable<string[]>>(null);

    useMount(() => {
      if (isTitleHaveNickname) {
        setTitleArray(parseTextWithNickname(t(titleKey)));
      }
    });

    // TODO: uncomment when userState will be update
    // const parentNickname = useAppSelector(state => state.user.child);
    // const childNickname =  useAppSelector(state => state.user.parent);

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
            {_.map(titleArray, (item: string) => {
              switch (item) {
                case NicknameType.Parent:
                  // TODO: change to parentNickname when state will be update
                  return <ExtendedText>{DUMMY_PARENT_NICKNAME}</ExtendedText>;
                case NicknameType.Child:
                  // TODO: change to childNickname when state will be update
                  return <ExtendedText>{DUMMY_CHILD_NICKNAME}</ExtendedText>;
                default:
                  return <ExtendedText>{t(item)}</ExtendedText>;
              }
            })}
          </View>
        );
      } else {
        return <ExtendedText>{t(titleKey)}</ExtendedText>;
      }
    }, [isTitleHaveNickname, t, titleArray, titleKey]);

    return (
      <ImageBackground source={backgroundImage} style={generalStyles.flex}>
        {renderHeader()}
        <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={onSubmit}>
          <View>
            <Image source={image} />
            {renderTitle()}
            <ExtendedText>{t(subtitleKey)}</ExtendedText>
          </View>
        </BottomButtonView>
      </ImageBackground>
    );
  };

import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';
import _ from 'lodash';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { useAppSelector, useMount } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { Nullable, parseTextWithNickname } from '../../../../utils';
import { NicknameType } from '../../../../utils/types';
import { IAcknowledgementSuccessivelyScreenProps } from './AcknowledgementSuccessively.types';
import { useNavigateNextQuest, useNavigatePrevQuest } from '../../../../hooks';
import { styles } from './AcknowledgementSuccessively.styles';

export const AcknowledgementSuccessivelyScreen: React.FC<IAcknowledgementSuccessivelyScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      crossHeader,
      titleHasNickname,
      images,
      backgroundImage,
    } = route.params.data;

    const { t } = useTranslation();
    const [titleArray, setTitleArray] = useState<Nullable<string[]>>(null);
    const parentNickname = useAppSelector(state => state.user.child?.nickname);
    const childNickname = useAppSelector(state => state.user.parent?.nickname);

    const goBack = useNavigatePrevQuest();
    const onSubmit = useNavigateNextQuest();

    useMount(() => {
      if (titleHasNickname) {
        setTitleArray(parseTextWithNickname(title));
      }
    });

    const renderHeader = useCallback(() => {
      if (crossHeader) {
        return (
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={goBack}
            // TODO: change to real image & function
            rightIcon={IMAGES.WHITE_BACK_ARROW}
            onRightIconPress={goBack}
          />
        );
      } else {
        return (
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={goBack}
          />
        );
      }
    }, [crossHeader, goBack]);

    const renderTitle = useCallback(() => {
      if (titleHasNickname) {
        return (
          <View style={generalStyles.row}>
            {_.map(titleArray, (item: string) => {
              switch (item) {
                case NicknameType.Parent:
                  return (
                    <ExtendedText key={item} preset="body-bold">
                      {parentNickname}
                    </ExtendedText>
                  );
                case NicknameType.Child:
                  return (
                    <ExtendedText key={item} preset="body-bold">
                      {childNickname}
                    </ExtendedText>
                  );
                default:
                  return (
                    <ExtendedText key={item} preset="large-title">
                      {t(item)}
                    </ExtendedText>
                  );
              }
            })}
          </View>
        );
      } else {
        return (
          <ExtendedText preset="large-title" style={styles.title}>
            {title}
          </ExtendedText>
        );
      }
    }, [childNickname, parentNickname, t, title, titleArray, titleHasNickname]);

    return (
      <ImageBackground
        // TODO: change to the real image
        source={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          {renderHeader()}
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={onSubmit}
            style={styles.container}>
            <Image
              // TODO: change to the real image
              source={IMAGES.WHITE_PENCIL}
              style={styles.image}
            />
            {renderTitle()}
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  IPlayer,
  ISelectPlayerSupportScreenProps,
} from './SelectPlayerSupport.types';
import { styles } from './SelectPlayerSupport.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';
import { DUMMY_PLAYER_LIST } from './SelectPlayerSupport.data';
import { useNavigateNextQuest, useNavigatePrevQuest } from '../../../hooks';

export const SelectPlayerSupportScreen: React.FC<ISelectPlayerSupportScreenProps> =
  ({ route }) => {
    const [selectedPlayer, setSelectedPlayer] = useState<string>('');

    const { t } = useTranslation();
    const goBack = useNavigatePrevQuest();
    const onSubmit = useNavigateNextQuest();

    const {
      title,
      description,
      buttonTitle,
      images,
      backgroundImage,
      crossHeader,
    } = route.params.data;

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

    const renderItem = useCallback(
      ({ item }: { item: IPlayer }) => {
        const onPlayerPress = () => {
          setSelectedPlayer(item.id);
        };
        return (
          <TouchableOpacity
            onPress={onPlayerPress}
            style={[
              styles.playerContainer,
              selectedPlayer === item.id && styles.activeBorder,
            ]}>
            <ExtendedText preset="title">{item.title}</ExtendedText>
            <Image source={item.image} style={styles.playerImage} />
          </TouchableOpacity>
        );
      },
      [selectedPlayer],
    );

    return (
      <ImageBackground
        source={
          (backgroundImage && IMAGES[backgroundImage]) ?? {
            uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
          }
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          {renderHeader()}
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.ready')}
            onSubmit={onSubmit}
            isDisabledButton={!selectedPlayer}
            style={styles.container}>
            <ExtendedText preset="title" style={styles.title}>
              {title ?? t('screens.select_player.title')}
            </ExtendedText>
            <FlatList
              data={DUMMY_PLAYER_LIST}
              renderItem={renderItem}
              style={styles.playerList}
            />
            {/* // TODO: change to correct image */}
            <Image
              source={(images && IMAGES[images[0]]) ?? IMAGES.LOGO}
              style={styles.infoImage}
            />
            <ExtendedText preset="secondary-text" style={styles.footer}>
              {description ?? t('screens.select_player.footer')}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

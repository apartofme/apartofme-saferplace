import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { IPlayer, ISelectPlayerScreenProps } from './SelectPlayer.types';
import { styles } from './SelectPlayer.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';
import { DUMMY_PLAYER_LIST } from './SelectPlayer.data';

export const SelectPlayerScreen: React.FC<ISelectPlayerScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState<string>('');

  const { t } = useTranslation();

  const { backgroundImage, isCrossHeader } = route.params.data;

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
    <ImageBackground source={backgroundImage} style={generalStyles.flex}>
      {renderHeader()}
      <BottomButtonView
        buttonTitle={t('buttons.ready')}
        onSubmit={_.noop}
        isDisabledButton={!selectedPlayer}
        style={styles.container}>
        <ExtendedText preset="title" style={styles.title}>
          {t('screens.select_player.title')}
        </ExtendedText>
        <FlatList data={DUMMY_PLAYER_LIST} renderItem={renderItem} />
      </BottomButtonView>
    </ImageBackground>
  );
};

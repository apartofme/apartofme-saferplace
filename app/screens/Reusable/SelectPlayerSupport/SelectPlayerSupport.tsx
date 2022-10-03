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
import { PLAYER_LIST } from './SelectPlayerSupport.data';
import {
  useAppDispatch,
  useAppSelector,
  useMount,
  useNavigateNextQuest,
  useNavigatePrevQuest,
} from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';

export const SelectPlayerSupportScreen: React.FC<ISelectPlayerSupportScreenProps> =
  ({ navigation, route }) => {
    const [selectedPlayer, setSelectedPlayer] = useState<string>('');

    const { t } = useTranslation();
    const goBack = useNavigatePrevQuest();
    const navigateNextQuest = useNavigateNextQuest();
    const dispatch = useAppDispatch();

    const [playerList, setPlayerList] = useState(PLAYER_LIST);

    const parentNickname = useAppSelector(
      state => state.user.child?.nickname,
    ) as string;
    const childNickname = useAppSelector(
      state => state.user.parent?.nickname,
    ) as string;

    useMount(() => {
      const playerParent = { ...playerList[0], title: parentNickname };
      const playerChild = { ...playerList[1], title: childNickname };
      setPlayerList([playerParent, playerChild]);
    });

    const onSubmit = useCallback(() => {
      dispatch(cacheSlice.actions.saveNicknames({ current: selectedPlayer }));
      navigateNextQuest();
    }, [dispatch, navigateNextQuest, selectedPlayer]);

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
          setSelectedPlayer(item.title);
        };
        return (
          <TouchableOpacity
            onPress={onPlayerPress}
            style={[
              styles.playerContainer,
              selectedPlayer === item.title && styles.activeBorder,
            ]}>
            <ExtendedText preset="title">{item.title}</ExtendedText>
            <Image source={item.image} style={styles.playerImage} />
          </TouchableOpacity>
        );
      },
      [selectedPlayer],
    );

    const goToAlert = useCallback(() => {
      navigation.navigate('Alert');
    }, [navigation]);

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
              data={playerList}
              renderItem={renderItem}
              style={styles.playerList}
            />
            {/* // TODO: change to correct image */}
            <TouchableOpacity onPress={goToAlert}>
              <Image
                source={(images && IMAGES[images[0]]) ?? IMAGES.LOGO}
                style={styles.infoImage}
              />
            </TouchableOpacity>

            <ExtendedText preset="secondary-text" style={styles.footer}>
              {description ?? t('screens.select_player.footer')}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

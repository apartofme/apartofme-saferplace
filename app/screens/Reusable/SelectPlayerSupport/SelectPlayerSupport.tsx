import React, { useCallback, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  IPlayer,
  ISelectPlayerSupportScreenProps,
} from './SelectPlayerSupport.types';
import { styles } from './SelectPlayerSupport.styles';
import { BottomButtonView, ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { PLAYER_LIST } from './SelectPlayerSupport.data';
import {
  useAppDispatch,
  useAppSelector,
  useMount,
  useNavigateNextQuest,
  useRenderQuestHeader,
} from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';
import { AVATARS_SVG, SVG } from '../../../assets/svg';

const OrangeQuestionMarkIcon = SVG.OrangeQuestionMarkIcon;

export const SelectPlayerSupportScreen: React.FC<ISelectPlayerSupportScreenProps> =
  ({ navigation, route }) => {
    const {
      title,
      description,
      buttonTitle,
      backgroundImage,
      crossHeader,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const [selectedPlayer, setSelectedPlayer] = useState<string>('');

    const { t } = useTranslation();
    const navigateNextQuest = useNavigateNextQuest();
    const dispatch = useAppDispatch();

    const [playerList, setPlayerList] = useState(PLAYER_LIST);

    const parent = useAppSelector(state => state.user.parent);
    const child = useAppSelector(state => state.user.child);

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    useMount(() => {
      const playerParent: IPlayer = {
        ...playerList[0],
        title: parent?.nickname ?? '',
        icon: AVATARS_SVG[parent?.avatar ?? 'CircleRabbitIcon'],
      };
      const playerChild: IPlayer = {
        ...playerList[1],
        title: child?.nickname ?? '',
        icon: AVATARS_SVG[child?.avatar ?? 'CircleBearIcon'],
      };
      setPlayerList([playerParent, playerChild]);
    });

    const onSubmit = useCallback(() => {
      dispatch(cacheSlice.actions.saveChosenNickname(selectedPlayer));
      navigateNextQuest();
    }, [dispatch, navigateNextQuest, selectedPlayer]);

    const renderItem = useCallback(
      ({ item }: { item: IPlayer }) => {
        const onPlayerPress = () => {
          setSelectedPlayer(item.title);
        };
        return (
          <Pressable
            onPress={onPlayerPress}
            style={[
              styles.playerContainer,
              selectedPlayer === item.title && styles.activePlayerContainer,
            ]}>
            <ExtendedText preset="title" style={generalStyles.brilliantWhite}>
              {item.title}
            </ExtendedText>
            <item.icon width={80} height={80} />
          </Pressable>
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
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.select')}
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
              showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity onPress={goToAlert} style={styles.info}>
              <OrangeQuestionMarkIcon />
            </TouchableOpacity>

            <ExtendedText
              preset="secondary-text"
              style={generalStyles.brilliantWhiteCenter}>
              {description || t('screens.select_player.footer')}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };

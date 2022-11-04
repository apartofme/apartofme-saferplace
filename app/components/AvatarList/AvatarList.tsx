import React, { useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';

import { IAvatarListProps } from './AvatarList.types';
import { styles } from './AvatarList.styles';
import { UserImageTitle } from '../UserImageTitle';
import { UserType } from '../../utils/types';
import { userSlice } from '../../redux/slices';
import { useAppDispatch } from '../../hooks';
import { AvatarListType, IAvatarListItem } from './AvatarList.data';

export const AvatarList: React.FC<IAvatarListProps> = ({ data, parent }) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const listData = useMemo(() => {
    const resultList: IAvatarListItem[] = [];
    if (parent) {
      resultList.unshift({ parent: parent, type: AvatarListType.Parent });
    }
    _.map(data, item =>
      resultList.push({ user: item, type: AvatarListType.Child }),
    );
    resultList.push({ type: AvatarListType.AddChild });
    if (resultList.length % 2 !== 0) {
      resultList.push({ type: AvatarListType.EmptyView });
    }
    return resultList;
  }, [data, parent]);

  const onAddChildPress = useCallback(() => {
    navigation.navigate('SelectUserAcknowledgement');
  }, [navigation]);

  const onParentPress = useCallback(() => {
    navigation.navigate('EditProfile', { data: { type: UserType.Parent } });
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }: { item: IAvatarListItem }) => {
      const onPress = () => {
        if (!parent && item.user) {
          dispatch(userSlice.actions.setChild(item.user));
          navigation.navigate('GardenStack');
          return;
        }
        navigation.navigate('EditProfile', {
          data: { type: UserType.Child, userId: item.user?.uid },
        });
      };

      switch (item.type) {
        case AvatarListType.Parent:
          return (
            <View style={styles.childContainer}>
              <UserImageTitle
                onPress={onParentPress}
                image={item.parent?.avatar}
                title={item.parent?.nickname}
              />
            </View>
          );
        case AvatarListType.Child:
          return (
            <View style={styles.childContainer}>
              <UserImageTitle
                onPress={onPress}
                image={item.user?.avatar}
                title={item.user?.nickname}
              />
            </View>
          );
        case AvatarListType.AddChild:
          return (
            <View style={styles.childContainer}>
              <UserImageTitle onPress={onAddChildPress} />
            </View>
          );
        default:
          return <View style={styles.childContainer} />;
      }
    },
    [dispatch, navigation, onAddChildPress, onParentPress, parent],
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={listData}
      renderItem={renderItem}
      numColumns={2}
      style={styles.container}
    />
  );
};

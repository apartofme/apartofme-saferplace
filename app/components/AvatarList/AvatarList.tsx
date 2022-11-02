import React, { useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import _ from 'lodash';

import { IAvatarListProps } from './AvatarList.types';
import { styles } from './AvatarList.styles';
import { UserImageTitle } from '../UserImageTitle';
import { IChild } from '../../models/IChild';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/slices';
import { UserType } from '../../utils/types';

export const AvatarList: React.FC<IAvatarListProps> = ({ data, parent }) => {
  const listData = useMemo(() => {
    if (data.length % 2 === 0) {
      if (parent) {
        return [data[0], ...data, data[0], data[0]];
      }
      return [...data, data[0], data[0]];
    } else {
      if (parent) {
        return [data[0], ...data, data[0], data[0]];
      }
      return [...data, data[0]];
    }
  }, [data, parent]);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onAddChildPress = useCallback(() => {
    navigation.navigate('SelectUserAcknowledgement');
  }, [navigation]);

  const renderItem = useCallback(
    ({ item, index }: { item: IChild; index: number }) => {
      const onChildPress = () => {
        if (!parent) {
          dispatch(userSlice.actions.setChildSuccess(item));
          navigation.navigate('GardenStack');
          return;
        }
        navigation.navigate('EditProfile', {
          data: { type: UserType.Child, userId: item.uid },
        });
      };

      const onParentPress = () => {
        navigation.navigate('EditProfile', { data: { type: UserType.Parent } });
      };

      if (parent && index === 0) {
        return (
          <View style={styles.childContainer}>
            <UserImageTitle
              onPress={onParentPress}
              image={parent.avatar}
              title={parent.nickname}
            />
          </View>
        );
      }

      if (data.length % 2 === 0) {
        if (index === listData.length - 1) {
          return <View style={styles.childContainer} />;
        }
        if (index === listData.length - 2) {
          return (
            <View style={styles.childContainer}>
              <UserImageTitle onPress={onAddChildPress} />
            </View>
          );
        }
      } else if (parent) {
        if (index === listData.length - 1) {
          return <View style={styles.childContainer} />;
        }
        if (index === listData.length - 2) {
          return (
            <View style={styles.childContainer}>
              <UserImageTitle onPress={_.noop} />
            </View>
          );
        }
      } else {
        if (index === listData.length - 1) {
          return (
            <View style={styles.childContainer}>
              <UserImageTitle onPress={_.noop} />
            </View>
          );
        }
      }
      return (
        <View style={styles.childContainer}>
          <UserImageTitle
            onPress={onChildPress}
            image={item.avatar}
            title={item.nickname}
          />
        </View>
      );
    },
    [
      data.length,
      dispatch,
      listData.length,
      navigation,
      onAddChildPress,
      parent,
    ],
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

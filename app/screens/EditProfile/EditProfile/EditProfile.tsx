import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, View } from 'react-native';
import _ from 'lodash';

import { BACKGROUND_IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedButton,
  ExtendedKeyboardAvoidingView,
  ExtendedTextInput,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IEditProfileScreenProps } from './EditProfile.types';
import { styles } from './EditProfile.styles';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { userSlice } from '../../../redux/slices';
import { UserType } from '../../../utils/types';
import { AVATARS_SVG, SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const EditProfileScreen: React.FC<IEditProfileScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();

  const { type, userId } = route.params?.data;

  const dispatch = useAppDispatch();

  const parentData = useAppSelector(state => state.user.parent);
  const children = useAppSelector(state => state.user.children);

  const user = useMemo(() => {
    if (type === UserType.Child) {
      return _.find(children, item => item.uid === userId);
    }
    return parentData;
  }, [children, parentData, type, userId]);

  const [nickname, setNickname] = useState(user ? user.nickname : '');
  const [active, setIsActive] = useState(false);

  const Icon = user && AVATARS_SVG[user?.avatar];

  const onSubmit = useCallback(() => {
    if (type === UserType.Parent) {
      dispatch(userSlice.actions.editParent({ nickname }));
      navigation.goBack();
      return;
    }
    if (user?.uid) {
      dispatch(userSlice.actions.editChild({ nickname, userId: user?.uid }));
    }
    navigation.goBack();
  }, [dispatch, navigation, nickname, type, user?.uid]);

  return (
    <View style={generalStyles.flex}>
      <Image
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.backgroundImage}
      />
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView buttonTitle={t('buttons.save')} onSubmit={onSubmit}>
            {Icon && !active && (
              <View style={generalStyles.aiCenter}>
                <Icon />
              </View>
            )}
            <View style={styles.inputContainer}>
              <ExtendedTextInput
                value={nickname}
                onChangeText={setNickname}
                setIsActive={setIsActive}
                maxLength={12}
              />
            </View>
          </BottomButtonView>
          <ExtendedButton
            preset="border"
            title={t('buttons.cancel')}
            style={styles.button}
            onPress={navigation.goBack}
          />
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

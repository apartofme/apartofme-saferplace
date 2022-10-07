import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedButton,
  ExtendedTextInput,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IEditProfileScreenProps } from './EditProfile.types';
import { styles } from './EditProfile.styles';

export const EditProfileScreen: React.FC<IEditProfileScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.flex}>
      <BottomButtonView buttonTitle={t('buttons.cancel')} onSubmit={_.noop}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />

        <View style={styles.container}>
          {/* //TODO: carousel  */}
          <ExtendedTextInput />
        </View>
        <ExtendedButton title={t('buttons.save')} style={styles.button} />
      </BottomButtonView>
    </SafeAreaView>
  );
};

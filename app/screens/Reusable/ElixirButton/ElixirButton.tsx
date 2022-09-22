import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { BottomButtonView } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { styles } from './ElixirButton.styles';
import { IElixirButtonScreenProps } from './ElixirButton.types';

export const ElixirButtonScreen: React.FC<IElixirButtonScreenProps> = ({
  route,
}) => {
  const { onSubmit } = route.params.data;

  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.flex}>
      <BottomButtonView
        buttonTitle={t('buttons.next')}
        onSubmit={onSubmit ?? _.noop}>
        <View style={styles.container}>
          <Image source={IMAGES.LOGO} />
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};

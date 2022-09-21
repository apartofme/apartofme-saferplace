import React from 'react';
import { SafeAreaView } from 'react-native';
import _ from 'lodash';

import { IElixirTitleButtonScreenProps } from './ElixirTitleButton.types';
import { styles } from './ElixirTitleButton.styles';
import { BottomButtonView, ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';

export const ElixirTitleButtonScreen: React.FC<IElixirTitleButtonScreenProps> =
  ({ route }) => {
    const { title, buttonTitle } = route.params.data;

    return (
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={buttonTitle}
          onSubmit={_.noop}
          style={styles.container}>
          <ExtendedText preset="title" style={styles.title}>
            {title}
          </ExtendedText>
          {/* // TODO: add the image */}
        </BottomButtonView>
      </SafeAreaView>
    );
  };

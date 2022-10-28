import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { IQuestionViewProps } from './QuestionView.types';
import { styles } from './QuestionView.styles';
import { ExtendedText } from '../../../../../../components';
import { generalStyles } from '../../../../../../utils/styles';

export const QuestionView: React.FC<IQuestionViewProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ExtendedText preset="heading" style={generalStyles.brilliantWhiteCenter}>
        {t(title)}
      </ExtendedText>
    </View>
  );
};

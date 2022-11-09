import _ from 'lodash';
import React from 'react';
import { TextStyle } from 'react-native';

import { ExtendedText, ExtendedTextPresets } from '../components';
import { generalStyles } from './styles';

export const parseText = ({
  text,
  preset = 'secondary-text',
  style,
  variableStyle = [generalStyles.primaryOrange, generalStyles.boldText],
}: {
  text: string;
  preset?: ExtendedTextPresets;
  style?: TextStyle;
  variableStyle?: TextStyle[];
}): React.FC => {
  const renderBoldText = (boldText: string) => (
    <ExtendedText
      key={boldText}
      style={[style, generalStyles.boldText]}
      preset={preset}>
      {boldText.replace('*', '')}
    </ExtendedText>
  );

  const renderVariableText = (variableText: string) => (
    <ExtendedText key={variableText} style={variableStyle}>
      {variableText.replace('$', '')}
    </ExtendedText>
  );

  const textArray = _.split(text, '|').map(value => {
    if (!value) {
      return;
    }
    if (value.startsWith('$')) {
      return renderVariableText(value);
    }
    if (value.startsWith('*')) {
      return renderBoldText(value);
    }
    return (
      <ExtendedText key={value} preset={preset}>
        {value}
      </ExtendedText>
    );
  });

  return () => (
    <ExtendedText key={text} preset={preset} style={style}>
      {textArray}
    </ExtendedText>
  );
};

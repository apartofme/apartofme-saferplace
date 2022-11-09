import React, { useCallback, useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './FAQListItem.styles';
import { IFAQListItemProps } from './FAQListItem.types';
import { ExtendedText } from '../../../../../components';
import { SVG } from '../../../../../assets/svg';
import { generalStyles } from '../../../../../utils/styles';
import { parseText } from '../../../../../utils/parsers';

const OrangeCirclePlussIcon = SVG.OrangeCirclePlussIcon;
const OrangeCircleCrossIcon = SVG.OrangeCircleCrossIcon;

export const FAQListItem: React.FC<IFAQListItemProps> = ({ data }) => {
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(false);

  const Icon = useMemo(() => {
    if (isActive) {
      return OrangeCircleCrossIcon;
    }
    return OrangeCirclePlussIcon;
  }, [isActive]);

  const onIconPress = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const Subtitle = parseText({
    text: t(data.subtitleKey),
    style: styles.subtitle,
  });

  return (
    <View style={styles.container}>
      <View style={generalStyles.row}>
        <View style={generalStyles.flex}>
          <ExtendedText style={styles.title} preset="secondary-text">
            {t(data.titleKey)}
          </ExtendedText>
        </View>
        <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
          <Icon />
        </TouchableOpacity>
      </View>

      {isActive && <Subtitle />}
    </View>
  );
};

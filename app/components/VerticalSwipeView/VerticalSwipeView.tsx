import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, ScrollView, View } from 'react-native';

import { IMAGES } from '../../assets';
import { generalStyles } from '../../utils/styles';
import { ExtendedButton } from '../ExtendedButton';
import { IVerticalSwipeViewProps } from './VerticalSwipeView.props';
import { styles } from './VerticalSwipeView.styles';

export const VerticalSwipeView: React.FC<IVerticalSwipeViewProps> = ({
  renderTopElement,
  renderBottomElement,
}) => {
  const { t } = useTranslation();

  const scrollViewRef = useRef<ScrollView>(null);

  const onDownPress = useCallback(() => {
    scrollViewRef.current?.scrollToEnd();
  }, []);

  const onUpPress = useCallback(() => {
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }, []);

  return (
    <View style={generalStyles.flex}>
      <ImageBackground source={IMAGES.LOGO} style={generalStyles.flex}>
        <ScrollView
          scrollEnabled={false}
          ref={scrollViewRef}
          style={styles.scrollView}>
          <View style={styles.topContentContainer}>
            {renderTopElement && renderTopElement()}
            <ExtendedButton title={t('some')} onPress={onDownPress} />
          </View>
          <View style={styles.bottomContentContainer}>
            {renderBottomElement && renderBottomElement()}
            <ExtendedButton title={t('some')} onPress={onUpPress} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

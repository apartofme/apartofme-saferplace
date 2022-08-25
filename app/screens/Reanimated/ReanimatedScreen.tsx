import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  Easing,
  FadeIn,
  FadeOutRight,
  Layout,
} from 'react-native-reanimated';
import { random, map } from 'lodash';

import { ExtendedButton, ExtendedText } from '../../components';
import { IReanimatedScreenProps } from './ReanimatedScreen.props';
import { styles } from './ReanimatedScreen.styles';
import { generalStyles } from '../../utils/styles';

export const ReanimatedScreen: React.FC<IReanimatedScreenProps> = () => {
  const [points, setPoints] = useState(['point 0', 'point 1', 'point 2']);

  const onNewRandomPoint = useCallback(() => {
    const newPoints = points.slice();
    newPoints.unshift(`point ${random(true)}`);
    setPoints(newPoints);
  }, [points]);

  const onRemoveRandomPoint = useCallback(() => {
    const randomIndex = random(0, points.length - 1);
    points.splice(randomIndex, 1);
    setPoints(points.slice());
  }, [points]);

  return (
    <SafeAreaView style={generalStyles.whFlex} edges={['top', 'bottom']}>
      <ExtendedText preset="title" style={styles.title}>
        Reanimated Demonstration
      </ExtendedText>

      <Animated.ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}>
        {map(points, item => (
          <Animated.View
            key={item}
            entering={FadeIn.duration(200)}
            layout={Layout.springify().duration(2500).easing(Easing.exp)}
            exiting={FadeOutRight.duration(200)}
            style={styles.pointContainer}>
            <ExtendedText style={styles.pointText}>{item}</ExtendedText>
          </Animated.View>
        ))}
      </Animated.ScrollView>

      <ExtendedButton onPress={onNewRandomPoint} title="Add new point" />
      <ExtendedButton
        onPress={onRemoveRandomPoint}
        title="Remove random point"
      />
    </SafeAreaView>
  );
};

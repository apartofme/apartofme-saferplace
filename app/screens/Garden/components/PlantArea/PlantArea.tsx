import React, { useCallback } from 'react';
import { Image, Pressable, View } from 'react-native';

import { IMAGES } from '../../../../assets';
import { useAppSelector } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { Plant } from '../Plant/Plant';
import { styles } from './PlantArea.styles';
import { IPlantAreaProps, PlantAreaType } from './PlantArea.types';

export const PlantArea: React.FC<IPlantAreaProps> = ({
  activePlantArea,
  setActivePlantArea,
  isPlanting,
}) => {
  const plantArea = useAppSelector(state => state.cache.plantArea);
  const selectPlantArea = useCallback(
    (selectedPlace: PlantAreaType) => {
      setActivePlantArea(selectedPlace);
    },
    [setActivePlantArea],
  );

  return (
    <View style={styles.container}>
      <Image source={IMAGES.TREE} style={styles.tree} />
      <View style={styles.plantingPlase}>
        <View style={generalStyles.row}>
          <View style={styles.emptyPlantArea} />
          {/* //* TopLeft plant area */}
          {isPlanting ? (
            <Pressable
              style={[
                styles.plantArea,
                styles.plantAreaBorder,
                styles.plantAreaTop,
                activePlantArea === PlantAreaType.TopLeft &&
                  styles.activePlantArea,
              ]}
              disabled={!!plantArea?.TopLeft}
              onPress={() => selectPlantArea(PlantAreaType.TopLeft)}>
              {plantArea?.TopLeft && (
                <Plant
                  plant={plantArea?.TopLeft}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </Pressable>
          ) : (
            <View style={[styles.plantArea, styles.plantAreaTop]}>
              {plantArea?.TopLeft && (
                <Plant
                  plant={plantArea?.TopLeft}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </View>
          )}
          <View style={styles.emptyPlantArea} />
        </View>
        <View style={generalStyles.row}>
          {/* //* BottomLeft plant area */}
          {isPlanting ? (
            <Pressable
              style={[
                styles.plantArea,
                styles.plantAreaBorder,
                activePlantArea === PlantAreaType.BottomLeft &&
                  styles.activePlantArea,
              ]}
              disabled={!!plantArea?.BottomLeft}
              onPress={() => selectPlantArea(PlantAreaType.BottomLeft)}>
              {plantArea?.BottomLeft && (
                <Plant
                  plant={plantArea?.BottomLeft}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </Pressable>
          ) : (
            <View style={[styles.plantArea]}>
              {plantArea?.BottomLeft && (
                <Plant
                  plant={plantArea?.BottomLeft}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </View>
          )}

          {/* //* Center plant area */}
          {isPlanting ? (
            <Pressable
              style={[
                styles.plantArea,
                activePlantArea === PlantAreaType.Center &&
                  styles.activePlantArea,
              ]}
              disabled={!!plantArea?.Center}
              onPress={() => selectPlantArea(PlantAreaType.Center)}>
              {plantArea?.Center && (
                <Plant
                  plant={plantArea?.Center}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </Pressable>
          ) : (
            <View style={styles.plantArea}>
              {plantArea?.Center && (
                <Plant
                  plant={plantArea?.Center}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </View>
          )}

          {/* //* TopRight plant area */}
          {isPlanting ? (
            <Pressable
              style={[
                styles.plantArea,
                styles.plantAreaBorder,
                activePlantArea === PlantAreaType.TopRight &&
                  styles.activePlantArea,
              ]}
              disabled={!!plantArea?.TopRight}
              onPress={() => selectPlantArea(PlantAreaType.TopRight)}>
              {plantArea?.TopRight && (
                <Plant
                  plant={plantArea?.TopRight}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </Pressable>
          ) : (
            <View style={[styles.plantArea]}>
              {plantArea?.TopRight && (
                <Plant
                  plant={plantArea?.TopRight}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </View>
          )}
        </View>
        <View style={generalStyles.row}>
          <View style={styles.emptyPlantArea} />

          {/* //* BottomRight plant area */}
          {isPlanting ? (
            <Pressable
              style={[
                styles.plantArea,
                styles.plantAreaBorder,
                styles.plantAreaBottom,
                activePlantArea === PlantAreaType.BottomRight &&
                  styles.activePlantArea,
              ]}
              disabled={!!plantArea?.BottomRight}
              onPress={() => selectPlantArea(PlantAreaType.BottomRight)}>
              {plantArea?.BottomRight && (
                <Plant
                  plant={plantArea?.BottomRight}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </Pressable>
          ) : (
            <View style={[styles.plantArea, styles.plantAreaBottom]}>
              {plantArea?.BottomRight && (
                <Plant
                  plant={plantArea?.BottomRight}
                  additionalStyle={styles.plantMargin}
                />
              )}
            </View>
          )}

          <View style={styles.emptyPlantArea} />
        </View>
      </View>
    </View>
  );
};

import React, { useCallback } from 'react';
import { Image, Pressable, View, ViewStyle } from 'react-native';

import { IMAGES } from '../../../../assets';
import { useAppSelector } from '../../../../hooks';
import { IPlant } from '../../../../models/IPlant';
import { generalStyles } from '../../../../utils/styles';
import { Plant } from '../Plant/Plant';
import { styles } from './PlantArea.styles';
import { IPlantAreaProps, PlantAreaType } from './PlantArea.types';

export const PlantArea: React.FC<IPlantAreaProps> = ({
  activePlantArea,
  setActivePlantArea,
  isPlanting,
}) => {
  const plantArea = useAppSelector(state => state.plant.plantArea);
  const selectPlantArea = useCallback(
    (selectedPlace: PlantAreaType) => {
      setActivePlantArea(selectedPlace);
    },
    [setActivePlantArea],
  );

  const renderPlantArea = useCallback(
    (
      currentPlantArea: PlantAreaType,
      currentPlant: IPlant | null,
      additionalStyles: ViewStyle[] | ViewStyle,
    ) => {
      if (isPlanting) {
        return (
          <Pressable
            style={[
              styles.plantArea,
              additionalStyles,
              activePlantArea === currentPlantArea && styles.activePlantArea,
            ]}
            disabled={!!currentPlant}
            onPress={() => selectPlantArea(currentPlantArea)}>
            {currentPlant && <Plant plant={currentPlant} />}
          </Pressable>
        );
      }

      return (
        <View
          style={[
            styles.plantArea,
            styles.borderTransparent,
            additionalStyles,
          ]}>
          {currentPlant && <Plant plant={currentPlant} />}
        </View>
      );
    },
    [activePlantArea, isPlanting, selectPlantArea],
  );
  return (
    <View style={styles.container}>
      <Image source={IMAGES.TREE} style={styles.tree} />
      <View style={styles.plantingPlaсe}>
        <View style={generalStyles.row}>
          <View style={styles.emptyPlantArea} />
          {/* //* TopLeft plant area */}
          {renderPlantArea(PlantAreaType.TopLeft, plantArea?.TopLeft, [
            styles.plantAreaBorder,
            styles.plantAreaTop,
          ])}

          <View style={styles.emptyPlantArea} />
        </View>

        <View style={generalStyles.row}>
          {/* //* BottomLeft plant area */}
          {renderPlantArea(
            PlantAreaType.BottomLeft,
            plantArea?.BottomLeft,
            styles.plantAreaBorder,
          )}

          {/* //* Center plant area */}
          {renderPlantArea(
            PlantAreaType.Center,
            plantArea?.Center,
            styles.plantAreaCenter,
          )}

          {/* //* TopRight plant area */}
          {renderPlantArea(
            PlantAreaType.TopRight,
            plantArea?.TopRight,
            styles.plantAreaBorder,
          )}
        </View>
        <View style={generalStyles.row}>
          <View style={styles.emptyPlantArea} />

          {/* //* BottomRight plant area */}
          {renderPlantArea(PlantAreaType.BottomRight, plantArea?.BottomRight, [
            styles.plantAreaBorder,
            styles.plantAreaBottom,
          ])}

          <View style={styles.emptyPlantArea} />
        </View>
      </View>
    </View>
  );
};

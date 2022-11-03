import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { Pressable, TouchableOpacity, View, ViewStyle } from 'react-native';

import { SadTreeRootIcon } from '../../../../assets/svg/garden';
import { HappyTreeRootIcon } from '../../../../assets/svg/garden/HappyTreeRootIcon';
import { AnnoyedAngrySmokeGuideIcon } from '../../../../assets/svg/guide';
import { HIT_SLOP, DOUBLE_HIT_SLOP } from '../../../../constants/hitSlop';
import { useAppSelector } from '../../../../hooks';
import { IPlant } from '../../../../models/IPlant';
import { generalStyles } from '../../../../utils/styles';
import { MixingElixirPhaseType } from '../../../../utils/types';
import { Plant } from '../Plant';
import { styles } from './PlantArea.styles';
import { IPlantAreaProps, PlantAreaType } from './PlantArea.types';

export const PlantArea: React.FC<IPlantAreaProps> = ({
  activePlantArea,
  setActivePlantArea,
  isPlanting,
  isBefriending,
}) => {
  const { plantArea } = useAppSelector(state => state.plant);
  const { currentDay } = useAppSelector(state => state.quest);
  const navigation = useNavigation();

  const selectPlantArea = useCallback(
    (selectedPlace: PlantAreaType) => {
      setActivePlantArea(selectedPlace);
    },
    [setActivePlantArea],
  );

  const onTreePress = useCallback(() => {
    navigation.navigate('MixingElixirStack', {
      screen: 'ElixirInstruction',
      params: {
        phase: MixingElixirPhaseType.Mix,
        selectedPlantArea: activePlantArea,
        isFirstTimeGarden: false,
      },
    });
  }, [activePlantArea, navigation]);

  const renderPlantArea = useCallback(
    (
      currentPlantArea: PlantAreaType,
      currentPlant: IPlant | null,
      additionalStyles?: ViewStyle,
    ) => {
      if (isPlanting) {
        return (
          <Pressable
            style={[
              styles.plantArea,
              additionalStyles,
              !currentPlant && styles.plantAreaBorder,
              activePlantArea === currentPlantArea && styles.activePlantArea,
            ]}
            disabled={!!currentPlant}
            hitSlop={
              currentPlantArea === PlantAreaType.Center
                ? DOUBLE_HIT_SLOP
                : HIT_SLOP
            }
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

  const treeIcon = useMemo(() => {
    if (isBefriending) {
      return <AnnoyedAngrySmokeGuideIcon />;
    }
    if (currentDay >= 14) {
      return <HappyTreeRootIcon />;
    }
    return <SadTreeRootIcon />;
  }, [currentDay, isBefriending]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={!isBefriending}
        onPress={onTreePress}
        style={styles.tree}>
        {treeIcon}
      </TouchableOpacity>
      <View style={styles.plantingPlaсe}>
        <View style={generalStyles.row}>
          {/* //* TopLeft plant area */}
          {renderPlantArea(PlantAreaType.TopLeft, plantArea?.TopLeft)}

          <View style={styles.emptyPlantArea} />

          {/* //* TopRight plant area */}
          {renderPlantArea(PlantAreaType.TopRight, plantArea?.TopRight)}
        </View>

        <View style={[generalStyles.row, generalStyles.jcCenter]}>
          {/* //* Center plant area */}
          {renderPlantArea(
            PlantAreaType.Center,
            plantArea?.Center,
            styles.plantAreaCenter,
          )}
        </View>

        <View style={generalStyles.row}>
          {/* //* BottomLeft plant area */}
          {renderPlantArea(PlantAreaType.BottomLeft, plantArea?.BottomLeft)}

          <View style={styles.emptyPlantArea} />

          {/* //* BottomRight plant area */}
          {renderPlantArea(PlantAreaType.BottomRight, plantArea?.BottomRight)}
        </View>
      </View>
    </View>
  );
};

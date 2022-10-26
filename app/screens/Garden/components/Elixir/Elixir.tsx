import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ELIXIR_SVG } from '../../../../assets/svg';
import { useAppSelector } from '../../../../hooks';
import { getElixirAnimationKeyByRange } from '../../../../utils';
import { ElixirKeysType } from '../../../../utils/types';
import { styles } from './Elixir.styles';

export const Elixir: React.FC = () => {
  const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);

  const elixirImage = useMemo(() => {
    const elixirImageKey = getElixirAnimationKeyByRange(fullnessElixir);
    switch (elixirImageKey) {
      case ElixirKeysType.ElixirZeroHalf:
        return <ELIXIR_SVG.ElixirZeroHalfIcon height={80} width={61} />;
      case ElixirKeysType.ElixirOne:
        return <ELIXIR_SVG.ElixirOneIcon height={80} width={61} />;
      case ElixirKeysType.ElixirOneHalf:
        return <ELIXIR_SVG.ElixirOneHalfIcon height={80} width={61} />;
      case ElixirKeysType.ElixirTwo:
        return <ELIXIR_SVG.ElixirTwoIcon height={80} width={61} />;
      case ElixirKeysType.ElixirTwoHalf:
        return <ELIXIR_SVG.ElixirTwoHalfIcon height={80} width={61} />;
      case ElixirKeysType.ElixirThree:
        return <ELIXIR_SVG.ElixirThreeIcon height={80} width={61} />;
      default:
        return <ELIXIR_SVG.ElixirZeroIcon height={80} width={61} />;
    }
  }, [fullnessElixir]);
  return <View style={styles.elixir}>{elixirImage}</View>;
};

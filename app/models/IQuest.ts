import { QuestStackParams } from '../navigation/stacks/questStackNavigator';
import { Nullable } from '../utils';
import { CharmsBackgroundsKeys, CharmsSvgKeys } from '../utils/types';

export interface IQuest {
  id: string;
  title: string;
  buttonTitle: Nullable<string>;
  description: Nullable<string>;
  backgroundImage: Nullable<CharmsBackgroundsKeys>;
  image: Nullable<CharmsSvgKeys>;
  tellMoreTitle: Nullable<string>;
  tellMoreDescription: Nullable<string>;
  tellMoreBackground: Nullable<CharmsBackgroundsKeys>;
  questLineId: string;
  type: keyof QuestStackParams;
  sort: number;
  titleHasNickname: Nullable<boolean>;
  crossHeader: Nullable<boolean>;
  duration: Nullable<number>;
  positiveNavigatesTo: Nullable<string>;
  negativeNavigatesTo: Nullable<string>;
  escapeMenuAlternativeNavigateTo: Nullable<string>;
  elixirReward: number;
}

export interface IQuestDatoCms {
  id: string;
  title: string;
  description: Nullable<string>;
  image: {
    id: string;
    path: string;
  };
  backgroundimage: Nullable<{
    id: string;
    path: string;
  }>;
  buttontitle: Nullable<string>;
  tellmoretitle: Nullable<string>;
  tellmoredescription: Nullable<string>;
  tellmorebackground: Nullable<{
    id: string;
    path: string;
  }>;
  questlineid: {
    id: string;
    title: string;
  };
  typeid: {
    slug: string;
  };
  sort: number;
  titlehasnickname: Nullable<boolean>;
  crossheader: Nullable<boolean>;
  duration: Nullable<number>;
  positivenavigatesto: Nullable<{
    id: string;
  }>;
  negativenavigatesto: Nullable<{
    id: string;
  }>;
  escapemenualternativenavigateto: Nullable<{
    id: string;
  }>;
  elixirreward: number;
}

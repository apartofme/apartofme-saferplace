import { IMAGES } from '../assets';
import { QuestStackParams } from '../navigation/stacks/questStackNavigator';
import { Nullable } from '../utils';
import { ImagesKeys } from '../utils/types';

export interface IQuest {
  id: string;
  title: string;
  buttonTitle: Nullable<string>;
  description: Nullable<string>;
  backgroundImage: Nullable<keyof typeof IMAGES>;
  image: Nullable<ImagesKeys>;
  tellMoreTitle: Nullable<string>;
  tellMoreDescription: Nullable<string>;
  tellMoreBackground: Nullable<keyof typeof IMAGES>;
  questLineId: string;
  type: keyof QuestStackParams;
  sort: number;
  titleHasNickname: Nullable<boolean>;
  crossHeader: Nullable<boolean>;
  duration: Nullable<number>;
  positiveNavigatesTo: Nullable<string>;
  negativeNavigatesTo: Nullable<string>;
  escapeMenuAlternativeNavigateTo: Nullable<string>;
  elixirReward: Nullable<number>;
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
  elixirreward: Nullable<number>;
}

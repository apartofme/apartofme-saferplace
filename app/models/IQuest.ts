import { Nullable } from '../utils';

export interface IQuest {
  id: string;
  title: string;
  buttonTitle: Nullable<string>;
  description: Nullable<string>;
  backgroundImage: Nullable<string>;
  images: string[];
  tellMoreTitle: Nullable<string>;
  tellMoreDescription: Nullable<string>;
  tellMoreBackground: Nullable<string>;
  questLineId: string;
  type: string;
  sort: number;
  titleHasNickname: Nullable<boolean>;
  crossHeader: Nullable<boolean>;
  duration: Nullable<number>;
}

export interface IQuestDatoCms {
  id: string;
  title: string;
  description: Nullable<string>;
  images: {
    id: string;
    path: string;
  }[];
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
}

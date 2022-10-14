import { ViewProps } from 'react-native';

export interface ITroublesomeSpiritQuestionsCarouselProps extends ViewProps {
  data: ReadonlyArray<ITroublesomeSpiritQuestionsCarouselItem>;
  setIndex: (index: number) => void;
}

export interface ITroublesomeSpiritQuestionsCarouselItem {
  id: string;
  titleKey: string;
}

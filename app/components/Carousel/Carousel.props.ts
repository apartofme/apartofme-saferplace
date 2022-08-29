import { ICarouselItem } from './Carousel.data';

export interface ICarouselProps {
  data: ICarouselItem[];
  renderCarouselItem: ({ item }: { item: ICarouselItem }) => JSX.Element;
}

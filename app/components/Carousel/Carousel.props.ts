import { CarouselType, ICarouselItem } from './Carousel.data';

export interface ICarouselProps {
  data: ICarouselItem[];
  preset: CarouselType;
  setCurrenPosition?: (item: number) => void;
}

import { CarouselType, ICarouselItem } from './Carousel.data';

export interface ICarouselProps {
  data: ICarouselItem[];
  preset: CarouselType;
  setCurrentPossition?: (item: number) => void;
}

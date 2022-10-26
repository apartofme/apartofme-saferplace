import { ISoundCarouselItem } from '../../../components';
import { AUDIO } from '../../../constants/audio';

export const SOUND_CAROUSEL: ReadonlyArray<ISoundCarouselItem> = [
  {
    id: AUDIO.DANCING_FIRST_DANCE,
    iconKey: 'DancingFirstTrackIcon',
  },
  {
    id: AUDIO.DANCING_HAPPY_DANCE,
    iconKey: 'DancingSecondTrackIcon',
  },
  {
    id: AUDIO.DANCING_PERCUSSION,
    iconKey: 'DancingThirdTrackIcon',
  },
  {
    id: AUDIO.DANCING_THUNDER,
    iconKey: 'DancingFourthTrackIcon',
  },
];

import { IMAGES } from '../../../assets';
import { ISelectDrawBuildListItem } from './SelectDrawBuild.types';

export enum SelectDrawBuildType {
  Build = 'build',
  Draw = 'draw',
}
export const SELECT_DRAW_BUILD_LIST: ReadonlyArray<ISelectDrawBuildListItem> = [
  {
    id: SelectDrawBuildType.Draw,
    titleKey: 'screens.select_draw_build.first.title',
    descriptionKey: 'screens.select_draw_build.first.description',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    id: SelectDrawBuildType.Build,
    titleKey: 'screens.select_draw_build.second.title',
    descriptionKey: 'screens.select_draw_build.second.description',
    image: IMAGES.WHITE_PENCIL,
  },
];

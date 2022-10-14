import { PlantsType } from '../utils/types';

export const INITIAL_PLANTS_STACK = [
  PlantsType.SpourCompassion,
  PlantsType.SpourCompassion,
  PlantsType.SpourCompassion,
  PlantsType.SpourCompassion,
  PlantsType.SpourCompassion,
];

export const INITIAL_PLANT_AREA = {
  TopLeft: null,
  TopRight: null,
  Center: null,
  BottomLeft: null,
  BottomRight: null,
};

export const INITIAL_ELIXIR = {
  fullnessElixir: 1,
};

export const INITIAL_QUESTS = {
  completedQuestsId: [],
  currentDay: 1,
  currentDayQuestsStack: [],
  lastDayUpdate: 0,
  interruptedQuestLine: null,
};

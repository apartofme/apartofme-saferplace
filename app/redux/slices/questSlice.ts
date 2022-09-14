import { createSlice } from '@reduxjs/toolkit';
import { IQuestLine } from '../../models/IQuestLine';

import { Nullable } from '../../utils';

interface IQuestState {
  allQuestLines: Nullable<Record<string, IQuestLine[]>>;
}

const INITIAL_STATE: IQuestState = {
  allQuestLines: null,
};

// export const cacheSlice = createSlice({
//   name: 'cache',
//   initialState: INITIAL_STATE,
//   reducers: {
//     saveSignUpDataParent(state, { payload }: ISignUpDataPayload) {
//       state.auth.parent = {
//         ...state.auth.parent,
//         ...payload,
//       };
//     },
//     saveSignUpDataChild(state, { payload }: IShortSignUpDataPayload) {
//       state.auth.child = {
//         ...state.auth.child,
//         ...payload,
//       };
//     },
//     saveTranslations(state, { payload }: ISaveTranslationsPayload) {
//       state.translations = { ...state.translations, ...payload };
//     },
//   },
// });

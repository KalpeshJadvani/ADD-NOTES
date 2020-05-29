import { CURRENT_TAB, ADD_NOTE } from '../actions';
const initialState = {
  notes: [],
  tab: 'All',
};
export const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_TAB:
      return { ...state, tab: action.payload };
    case ADD_NOTE:
      return {
        ...state,
        ...{
          notes: [...state.notes, ...action.payload.notes],
          tab: action.payload.tab,
        },
      };
    default:
      return state;
  }
};

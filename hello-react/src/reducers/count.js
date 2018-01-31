import { BUTTON_COUNTER_INCREMENT } from '../constants';

export const count = (state = 0, action) => {
  if (action.type === BUTTON_COUNTER_INCREMENT) {
    state = state + action.step; // IMMUTABLE
  }

  return state;
};

export const counts = (state = [10, 24], action) => {
  if (action.type === BUTTON_COUNTER_INCREMENT) {
    state = [
      ...state.slice(0, action.index),
      count(state[action.index], action),
      ...state.slice(action.index + 1, action.length),
    ]; // IMMUTABLE (voir Immutable.js)
  }

  return state;
};
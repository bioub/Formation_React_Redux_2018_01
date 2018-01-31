

/*
{
  type: 'INCREMENT',
  step: 1,
}
 */

// Action creators
// fonction qui créé l'action

import { BUTTON_COUNTER_INCREMENT } from '../constants';

export const countCreator = (index = 0, step = 1) => ({
  type: BUTTON_COUNTER_INCREMENT,
  step,
  index,
});
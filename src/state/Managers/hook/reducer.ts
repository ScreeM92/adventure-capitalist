import { ActionMap } from '../../../shared/helper';
import { IManager } from '.././../../shared/interfaces';

export type State = IManager[];

type Payload = {
  HIRE: { index: number; };
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'HIRE': {
      const newState = [...state];
      newState.splice(action.payload.index, 1);
      return newState;
    }
    default: {
      return state;
    }
  }
}

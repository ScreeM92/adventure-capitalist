import { ActionMap } from '../../../shared/helper';
import { IUpgrade } from '../interfaces';

export type State = IUpgrade[];

type Payload = {
  GET: { index: number; };
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'GET': {
      const newState = [...state];
      newState.splice(action.payload.index, 1);
      return newState;
    }
    default: {
      return state;
    }
  }
}

import { ActionMap } from '../../../shared/helper';
import { IBusiness } from '../../../shared/interfaces';
import Config from '../../../shared/config';

export type State = Record<string, IBusiness>
export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

type Payload = {
  BUY: { id: string; quantity?: number };
  HIRE_MANAGER: { id: string; };
  UPGRADE_BUSINESS: { id: string; times?: number };
}

export const reducer = (state: State, action: Actions) => {
  const { id } = action.payload;

  switch (action.type) {
    case 'BUY': {
      const { profit, price, purchasedTimes } = state[id];
      const quantity = action.payload.quantity || 1;

      return {
        ...state,
        [id]: {
          ...state[id],
          price: price * (quantity * Config.BUY_MULTIPLIER),
          purchasedTimes: purchasedTimes + quantity,
          profit: profit * (Config.BUY_MULTIPLIER * quantity)
        }
      };
    }
    case 'HIRE_MANAGER': {
      return {
        ...state,
        [id]: {
          ...state[id],
          hasManager: true
        }
      }
    }
    case 'UPGRADE_BUSINESS': {
      const times = action.payload.times || 3;
      const { profit } = state[id];

      return {
        ...state,
        [id]: {
          ...state[id],
          profit: profit * times
        }
      }
    }
    default: {
      return state;
    }
  }
}

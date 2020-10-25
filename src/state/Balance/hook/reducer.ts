import { ActionMap } from '../../../shared/helper';

type Payload = {
  DECREASE: { amount: number };
  INCREASE: { amount: number };
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

export const reducer = (balance: number, action: Actions) => {
  switch (action.type) {
    case 'DECREASE': {
      return balance - action.payload.amount;
    }
    case 'INCREASE': {
      return balance + action.payload.amount;
    }
    default: {
      return balance;
    }
  }
}

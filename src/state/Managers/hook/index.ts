import { useEffect, useReducer } from 'react';
import { reducer, State } from './reducer';
import defaultData from './data';
import { storage } from '../../../shared/Storage';
import { StorageKey } from '../../../shared/enums';

const initialValue = storage.getItem<State>(StorageKey.MANAGERS) || defaultData;

export default function() {
  const [managers, managerDispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    storage.setItem(StorageKey.MANAGERS, managers);
  }, [managers])
  
  return { managers, managerDispatch };
}

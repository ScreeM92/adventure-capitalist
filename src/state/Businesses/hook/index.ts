import { useEffect, useReducer } from 'react';
import { reducer, State } from './reducer';
import defaultData from './data';
import { storage } from '../../../shared/Storage';
import { StorageKey } from '../../../shared/enums';

const initialValue = storage.getItem<State>(StorageKey.BUSINESSES) || defaultData;

export default function() {
  const [businesses, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    storage.setItem(StorageKey.BUSINESSES, businesses);
  }, [businesses])

  return { businesses, dispatch };
}

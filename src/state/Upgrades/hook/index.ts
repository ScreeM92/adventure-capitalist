import React, { useEffect } from 'react';
import { reducer, State } from './reducer';
import defaultData from './data';
import { storage } from '../../../shared/Storage';
import { StorageKey } from '../../../shared/enums';

const initialValue = storage.getItem<State>(StorageKey.UPGRADES) || defaultData;

export default function() {
  const [upgrades, upgradeDispatch] = React.useReducer(reducer, initialValue);

  useEffect(() => {
    storage.setItem(StorageKey.UPGRADES, upgrades);
  }, [upgrades])
  
  return { upgrades, upgradeDispatch };
}

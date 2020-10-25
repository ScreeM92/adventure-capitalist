import React, { useEffect } from 'react';
import { storage } from '../../../shared/Storage';
import { StorageKey } from '../../../shared/enums';
import { reducer } from './reducer';

const initialValue = storage.calculateNewBalanceSinceLogout();

const useBalance = () => {
  const [balance, dispatch] = React.useReducer(reducer, initialValue);

  useEffect(() => {
    storage.setItem(StorageKey.BALANCE, balance);
  });

  return { balance, dispatch };
}

export default useBalance;

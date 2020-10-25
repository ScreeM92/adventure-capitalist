import React, { useContext } from 'react';
import { IBusiness } from '../../shared/interfaces';
import useBusiness from './hook';
import { Actions } from './hook/reducer';

const BusinessContext = React.createContext<Record<string, IBusiness>>({});
const BusinessDispatchContext = React.createContext<React.Dispatch<Actions>>(() => null);

export const useBusinessContext = () => {
  const context = useContext(BusinessContext)
  if (typeof context === undefined) {
    throw new Error('Cannot use `useBusinessContext` outside a BusinessProvider')
  }
  return context
}

export const useBusinessDispatchContext = () => {
  const context = useContext(BusinessDispatchContext)
  if (typeof context === undefined) {
    throw new Error('Cannot use `useBusinessDispatchContext` outside a BusinessProvider')
  }
  return context
}

export const BusinessProvider: React.FunctionComponent = ({ children }) => {
  const { businesses, dispatch } = useBusiness();

  return (
    <BusinessContext.Provider value={businesses}>
      <BusinessDispatchContext.Provider value={dispatch}>
        {children}
      </BusinessDispatchContext.Provider>
    </BusinessContext.Provider>
  )
}

import React, { useContext } from 'react';
import useUpgrade from './hook';

const UpgradeContext = React.createContext<ReturnType<typeof useUpgrade>>({} as any);

export const useUpgradeContext = () => {
  const context = useContext(UpgradeContext)
  if (typeof context === undefined) {
    throw new Error('Cannot use `useUpgradeContext` outside a UpgradeProvider')
  }
  return context
}

export const UpgradeProvider: React.FunctionComponent = props => {
  const value = useUpgrade();

  return (
    <UpgradeContext.Provider value={value} {...props} />
  )
}

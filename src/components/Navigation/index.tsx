import React from 'react';
import { ManagersModal } from './ManagersModal';
import { UpgradesModal } from './UpgradesModal';
import { Wrapper } from './styles';
import { NavigationLink } from './NavigationLink';
import { useManagerContext } from '../../state/Managers/index';
import { useBalanceContext } from '../../state/Balance/index';
import { useUpgradeContext } from '../../state/Upgrades/index';

export const Navigation: React.FunctionComponent = () => {
  const [showManagersModal, setShowManagersModal] = React.useState(false);
  const [showUpgradesModal, setShowUpgradesModal] = React.useState(false);
  const toggleManagersModal = (isShown: boolean) => () => setShowManagersModal(isShown);
  const toggleUpgradesModal = (isShown: boolean) => () => setShowUpgradesModal(isShown);

  const { managers } = useManagerContext();
  const { upgrades } = useUpgradeContext();
  const balance = useBalanceContext();

  const canPurchaseManager = managers.some(manager => balance > manager.price)
  const canPurchaseUpgrade = upgrades.some(upgrade => balance > upgrade.price)

  return (
    <Wrapper>
      <ManagersModal show={showManagersModal} onClose={toggleManagersModal(false)} />
      <UpgradesModal show={showUpgradesModal} onClose={toggleUpgradesModal(false)} />

      <NavigationLink onClick={toggleManagersModal(true)} canPurchase={canPurchaseManager}>Managers</NavigationLink>
      <NavigationLink onClick={toggleUpgradesModal(true)} canPurchase={canPurchaseUpgrade}>Upgrades</NavigationLink>
    </Wrapper>
  )
}

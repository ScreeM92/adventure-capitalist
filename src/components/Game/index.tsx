import React, {useState} from 'react';
import { Navigation } from '../Navigation';
import { BalanceSection } from '../BalanceSection';
import { Businesses } from '../Businesses';
import { BusinessProvider } from '../../state/Businesses';
import { BalanceProvider } from '../../state/Balance';
import { ManagerProvider } from '../../state/Managers';
import { UpgradeProvider } from '../../state/Upgrades';
import { Logo, Heading, Wrapper } from './styles';
import Navbar from 'react-bootstrap/Navbar';
import Toast from 'react-bootstrap/Toast';
import logo from '../../assets/logo.png';
import { storage } from '../../shared/Storage';
import { priceIntl } from '../../shared/helper';

export const Game: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);
  const [earning, setEarning] = useState(0);

  window.addEventListener('unload', () => {
    localStorage.setItem('LOGOUT', JSON.stringify(Date.now()));
  }, false)

  window.addEventListener('load', async() => {
    const profit = storage.calculateEarningSinceLogout();
    setEarning(profit);

    if (profit) {
      setShow(true);
    }
  }, false)

  return (
    <Wrapper>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <Logo src={logo} height="70"/>
          <Heading>Adventure Capitalist</Heading>
        </Navbar.Brand>
      </Navbar>

      <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}>
        <Toast.Header>
          <strong className="mr-auto">Earning</strong>
        </Toast.Header>
        <Toast.Body>Woohoo, you've earned <strong style={{ color: '#3dc16d' }}>{priceIntl.format(earning)}</strong>!</Toast.Body>
      </Toast>

      <BalanceProvider>
        <BalanceSection />

        <BusinessProvider>
          <ManagerProvider>
            <UpgradeProvider>
              <Navigation />
            </UpgradeProvider>
          </ManagerProvider>
          
          <Businesses />
        </BusinessProvider>

      </BalanceProvider>
    </Wrapper>
  );
}

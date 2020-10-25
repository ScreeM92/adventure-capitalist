import React from 'react';
import { useUpgradeContext } from '../../../state/Upgrades/index';
import { priceIntl } from '../../../shared/helper';
import { useBalanceContext, useBalanceDispatchContext } from '../../../state/Balance/index';
import { useBusinessDispatchContext } from '../../../state/Businesses/index';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

interface Props {
  show: boolean;
  onClose: () => void;
}

export const UpgradesModal: React.FunctionComponent<Props> = ({ show, onClose }) => {
  const { upgrades, upgradeDispatch } = useUpgradeContext();
  const balance = useBalanceContext();
  const balanceDispatch = useBalanceDispatchContext();
  const businessDispatch = useBusinessDispatchContext();

  const onUpgrade = (index: number) => () => {
    const upgrade = upgrades[index];

    upgradeDispatch({ type: 'GET', payload: { index } });
    balanceDispatch({ type: 'DECREASE', payload: { amount: upgrade.price } });
    businessDispatch({ type: 'UPGRADE_BUSINESS', payload: { id: upgrade.businessId, times: upgrade.times } });
  }
  
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => onClose()}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upgrades
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {
          upgrades.length > 0 ?
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  upgrades.map((upgrade, i) => {
                    const active = balance >= upgrade.price;

                    return (
                      <tr key={upgrade.businessId}>
                        <td>{i + 1}</td>
                        <td>{upgrade.title}</td>
                        <td>{upgrade.description}</td>
                        <td>{priceIntl.format(upgrade.price)}</td>
                        <td>
                          {
                            active
                              ? <Button onClick={onUpgrade(i)} variant="success">Buy!</Button>
                              : <Button variant="secondary" disabled>Buy!</Button>
                          }
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          : <h1>You have already bought all upgrades!</h1>
        }
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="dark" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

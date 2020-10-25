import React from 'react';
import { useManagerContext } from '../../../state/Managers/index';
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

export const ManagersModal: React.FunctionComponent<Props> = ({ show, onClose }) => {
  const { managers, managerDispatch } = useManagerContext();
  const balance = useBalanceContext();
  const balanceDispatch = useBalanceDispatchContext();
  const businessDispatch = useBusinessDispatchContext();

  const onHire = (index: number) => () => {
    const manager = managers[index];

    managerDispatch({ type: 'HIRE', payload: { index } });
    balanceDispatch({ type: 'DECREASE', payload: { amount: manager.price } });
    businessDispatch({ type: 'HIRE_MANAGER', payload: { id: manager.businessId } });
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
          Managers
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {
          managers.length > 0 ?
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  managers.map((manager, i) => {
                    const active = balance >= manager.price;

                    return (
                      <tr key={manager.businessId}>
                        <td>{i + 1}</td>
                        <td>{manager.name}</td>
                        <td>{manager.description}</td>
                        <td>{priceIntl.format(manager.price)}</td>
                        <td>
                          {
                            active
                              ? <Button onClick={onHire(i)} variant="success">Hire!</Button>
                              : <Button variant="secondary" disabled>Hire!</Button>
                          }
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          : <h1>You have already bought all managers!</h1>
        }
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="dark" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

import React from 'react';
import { Wrapper } from './styles';
import { IBusiness } from '../../../shared/interfaces';
import { priceIntl } from '../../../shared/helper';
import { useBalanceContext, useBalanceDispatchContext } from '../../../state/Balance';
import { useBusinessDispatchContext } from '../../../state/Businesses/index';

interface Props {
  business: IBusiness;
}

export const Unpurchased: React.FunctionComponent<Props> = ({ business }) => {
  const balance = useBalanceContext();
  const balanceDispatch = useBalanceDispatchContext();
  const businessDispatch = useBusinessDispatchContext();
  const onPurchase = () => {
    businessDispatch({ type: 'BUY', payload: { id: business.id } });
    balanceDispatch({ type: 'DECREASE', payload: { amount: business.price } });
  }
  const purchasable = balance >= business.price;

  return (
    <Wrapper purchasable={purchasable} role={purchasable ? "button": undefined} onClick={purchasable ? onPurchase : undefined}>
      <p>{business.name}</p>
      <img src={`./images/${business.logo}`} height="42" alt="Bussiness logo"/>
      <p>{priceIntl.format(business.price)}</p>
    </Wrapper>
  )
}

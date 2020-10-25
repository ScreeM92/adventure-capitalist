import React from 'react';
import { Wrapper } from './styles';

interface Props {
  onClick: () => void;
  canPurchase: boolean;
}

export const NavigationLink: React.FunctionComponent<Props> = ({ children, onClick, canPurchase }) => {
  return (
    <Wrapper onClick={onClick} purchasable={canPurchase}>
      {children}
    </Wrapper>
  );
}

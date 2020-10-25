import React from 'react';
import { Wrapper, Heading } from './styles';
import { priceIntl } from '../../shared/helper';
import { useBalanceContext } from '../../state/Balance/index';

interface Props {}

export const BalanceSection: React.FunctionComponent<Props> = () => {
  const balance = useBalanceContext();

  return (
    <Wrapper>
      <Heading>
        {priceIntl.format(balance)}
      </Heading>
    </Wrapper>
  );
};

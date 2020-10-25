import React from 'react';
import { IBusiness } from '../../../shared/interfaces';
import { Unpurchased } from './Unpurchased';
import { Purchased } from './Purchased';

interface Props {
  business: IBusiness;
}

const Component: React.FunctionComponent<Props> = ({ business }: Props) => {
  return business.purchasedTimes
    ? <Purchased business={business} />
    : <Unpurchased business={business} />
}

export const Business = React.memo(Component);

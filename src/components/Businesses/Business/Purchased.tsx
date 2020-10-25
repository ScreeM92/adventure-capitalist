import React, { useEffect, useState } from 'react';
import { IBusiness } from '../../../shared/interfaces';
import { PurchasedDiv, LeftSection, RightSection, ArrowDiv, BuyBtn } from './styles';
import arrowPng from '../../../assets/arrow_outline.png';
import { ReactComponent as ArrowMaskSVG } from '../../../assets/arrow_mask.svg';
import { priceIntl } from '../../../shared/helper';
import { useBalanceDispatchContext } from '../../../state/Balance';
import { useBusinessDispatchContext } from '../../../state/Businesses';
import { Duration } from './duration';
import { useBalanceContext } from '../../../state/Balance/index';

interface Props {
  business: IBusiness;
}

const Component: React.FunctionComponent<Props> = ({ business }) => {
  const balance = useBalanceContext();
  const balanceDispatch = useBalanceDispatchContext();
  const businessDispatch = useBusinessDispatchContext();
  const hasManager = business.hasManager;
  const canPurchase = balance >= business.price ? true : false;
  const [autoStart, setAutoStart] = useState(hasManager);
  const [uniqueId, setUniqueId] = useState(1);

  const onTimerComplete = () => {
    balanceDispatch({ type: 'INCREASE', payload: { amount: business.profit } });

    if (!hasManager) {
      setAutoStart(false);
    }
    setUniqueId(Math.random());
  }
  const onLeftSectionClick = () => {
    if (!autoStart) {
      setAutoStart(true)
      setUniqueId(Math.random())
    }
  }
  const onBuyClick = () => {
    businessDispatch({ type: 'BUY', payload: { id: business.id, quantity: 1 } });
    balanceDispatch({ type: 'DECREASE', payload: { amount: business.price } });
  }

  useEffect(() => {
    if (!autoStart && hasManager) {
      setAutoStart(true)
      setUniqueId(Math.random())
    }
  }, [hasManager, autoStart])

  return (
    <PurchasedDiv>
      <LeftSection onClick={hasManager ? undefined : onLeftSectionClick} clickable={!autoStart}>
        <img src={`./images/${business.logo}`} height="42" alt="Bussiness logo"/>
        <div>{business.purchasedTimes}</div>
      </LeftSection>

      <RightSection>
        <ArrowDiv animationDuration={business.duration} activeAnimation={autoStart} loopAnimation={hasManager}>
          <p>{priceIntl.format(business.profit)}</p>
          <span></span>
          <img src={arrowPng} alt="Business profit" />
          <ArrowMaskSVG />
        </ArrowDiv>

        <BuyBtn purchasable={canPurchase} onClick={canPurchase ? onBuyClick : undefined}>
          <p>Buy</p>
          <p>{priceIntl.format(business.price)}</p>
        </BuyBtn>

        <Duration onTimerComplete={onTimerComplete} uniqueId={uniqueId} autoStart={autoStart} duration={business.duration} />
      </RightSection>
    </PurchasedDiv>
  )
}

export const Purchased = React.memo(Component);

import styled, { keyframes, css } from 'styled-components';

export const PurchasedDiv = styled.div`
  position: relative;
  display: inline-flex;
  width: 300px;
  height: 80px;
  margin-bottom: 100px;
`
interface LeftSectionProps {
  clickable: boolean;
}
export const LeftSection = styled.section<LeftSectionProps>`
  position: relative;
  width: 20%;
  text-align: center;
  padding-right: 5px;

  &:hover {
    cursor: ${({ clickable }) => clickable ? 'pointer' : 'default'};
  }

  div {
    width: 50px;
    font-size: 1.5em;
    color: ${({ theme }) => theme.secColour};
  }
`

export const RightSection = styled.section`
  position: relative;
  display: inline-block;
  width: 80%;
`

const loader = keyframes`
  0% { width: 0%; }
  100% { width: 145%; }
`

interface ArrowDivProps {
  animationDuration: number;
  activeAnimation: boolean;
  loopAnimation: boolean;
}
export const ArrowDiv = styled.div<ArrowDivProps>`
  position: relative;
  display: block;
  width: 100%;
  height: 42px;
  text-align: center;

  p {
    position: relative;
    display: block;
    z-index: 100;
    margin: 0;
    padding-top: 7px;
    color: ${({ theme }) => theme.secColour};
  }
  span {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 0%;
    height: 50px;
    background: ${({ theme }) => theme.mainColour};
    clip-path: url(#arrowMask);
    transform: scale(0.68);
    transform-origin: top left;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  svg {
    position: absolute;
  }
  &:hover {
    cursor: default;
  }
  ${({ activeAnimation, animationDuration, loopAnimation }) => activeAnimation && css`
    span {
      animation: ${loader} ${animationDuration}s ease-in ${loopAnimation && 'infinite'};
    }
  `}
`;

interface CanPurchaseProps {
  purchasable: boolean;
}
export const BuyBtn = styled.div<CanPurchaseProps>`
  border: 1px solid #ffffff;
  border-radius: 10%;
  height: 45px;
  width: 69%;
  text-align: center;
  cursor: pointer;
  float: left;
  color: ${({ theme }) => theme.secColour};
  background-color: ${({theme, purchasable}) => {
      if(purchasable) {
        return theme.activeColour;
      }
      return theme.inactiveColour;
    }
  };

  p {
    margin: 0;
    z-index: 50;
    cursor: ${({purchasable}) => {
      if(purchasable) {
        return "pointer";
      }
      return "not-allowed";
    }
  };
  }
  p:nth-child(1) {
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5em;
  }
  p:nth-child(2) {
    padding-top: 10px;
    font-size: 1em;
    color: ${({ theme }) => theme.mainColour};
  }
`;

export const DurationDiv = styled.div`
  float: right;
  height: 45px;
  width: 30%;
  color: ${({ theme }) => theme.secColour};
  text-align: center;
  font-size: 0.8em;
  padding-top: 10px;
  border: 1px solid #ffffff;
  border-radius: 10%;

  p {
    margin: 0;
    padding-top: 7px;
  }
  &:hover {
    cursor: default;
  }
`

export const Wrapper = styled.div<CanPurchaseProps>`
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  border 1px solid #fff;
  border-radius: 10%;
  text-align: center;

  background-color: ${({theme, purchasable}) => {
      if(purchasable) {
        return theme.activeColour;
      }
      return theme.inactiveColour;
    }
  };

  p:nth-child(1) {
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5em;
  }
  p:nth-child(3) {
    padding-top: 10px;
    font-size: 1em;
    color: ${({ theme }) => theme.mainColour};
  }
`;
import styled from 'styled-components';

interface PurchasableProps {
  purchasable: boolean;
}
export const Wrapper = styled.div<PurchasableProps>`
  display: inline-block;
  margin-bottom: 20px;
  padding: 20px;
  color: ${({theme, purchasable}) => {
      if(purchasable) {
        return theme.activeColour;
      }
      return theme.secColour;
    }
  };
  font-size: 2em;

  &:hover {
    cursor: pointer;
  }
`;


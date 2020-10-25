import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.mainColour};
  margin-top: 50px;
  font-size: 3em;
  letter-spacing: 0.2rem;
`;

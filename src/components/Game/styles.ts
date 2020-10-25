import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;

  .navbar {
    padding: 0;
    background-color: #e3d4bc!important;
  }

  .navbar-brand {
    padding-bottom: 0;
  }
`;

export const SidePanel = styled.img`
  height: 100%;
  opacity: .6;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
`;

export const Logo = styled.img`
  display: inline-block;
`;

export const Heading = styled.h1`
  display: inline-block;
  margin: 10px;
  color: #000000;
  font-size: 1.5em;
  position: relative;
  
`;


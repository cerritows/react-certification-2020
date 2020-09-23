import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 3rem;
  z-index: 5;
  background-color: white;
  border: none;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`;

function NavBar({ children }) {
  return <StyledNavBar>{children}</StyledNavBar>;
}

export default NavBar;

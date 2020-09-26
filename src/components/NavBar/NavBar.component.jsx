import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  position: relative;
  display: flex;
  margin: -0.5rem;
  align-items: center;

  width: 100vw;
  height: 5rem;
  z-index: 5;

  background-color: white;
  border: none;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

const StyledNavBarRow = styled.section`
  width: 100%;
  height: 100%;
`;

function NavBar({ children }) {
  return (
    <StyledNavBar>
      <StyledNavBarRow>{children}</StyledNavBarRow>
    </StyledNavBar>
  );
}

export default NavBar;

import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.section``;

function NavItem({ children }) {
  return <StyledNavItem>{children}</StyledNavItem>;
}

export default NavItem;

import React from 'react';
import styled from 'styled-components';

const StyledCardHeader = styled.h2`
  color: black;
`;

function CardHeader({ children }) {
  return <StyledCardHeader>{children}</StyledCardHeader>;
}

export default CardHeader;

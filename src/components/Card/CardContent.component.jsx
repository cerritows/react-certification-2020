import React from 'react';
import styled from 'styled-components';

const StyledCardContent = styled.div`
  color: blue;
`;

function CardContent({ content }) {
  return <StyledCardContent>{content}</StyledCardContent>;
}

export default CardContent;

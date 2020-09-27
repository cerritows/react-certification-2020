import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
  padding-left: 5px;
`;

function IconLabel({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default IconLabel;

import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
  padding-left: 5px;
  color: ${(props) => props.color || props.theme.primaryColor};
`;

function IconLabel({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default IconLabel;

import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: ${(props) => props.size || '1.5rem'};
  text-transform: uppercase;
  padding: 5px 0;
  color: ${(props) => props.color || 'inherit'};
`;

function InputLabel({ children, ...props }) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

export default InputLabel;

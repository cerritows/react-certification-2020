import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: ${(props) => props.color || 'inherit'};
`;

function InputLabel({ children, ...props }) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

export default InputLabel;

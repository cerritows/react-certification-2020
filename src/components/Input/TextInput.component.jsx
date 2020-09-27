import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import searchElement from '../../utils/elementSearch';

const StyledInput = styled.input`
  height: 2rem;
  min-width: 50%;
  margin: 0 5px;
  border: none;
  font-size: 1rem;
  width: 100%;

  &:active,
  :focus {
    outline: 0;
  }
`;

const InputWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #f1e6f2;
  min-width: 50%;
  background-color: white;
  padding: 5px;
  margin: 5px 0;

  &:active,
  :focus {
    box-shadow: 0 0 1px 1px #580266;
    outline: 0;
  }
`;

function TextInput({ children, ...props }) {
  let childIcon;

  if (children) {
    childIcon = searchElement(children, Icon);
  }

  return (
    <InputWrapper>
      {childIcon}
      <StyledInput {...props} />
    </InputWrapper>
  );
}

export default TextInput;

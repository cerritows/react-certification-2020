import React from 'react';
import styled from 'styled-components';
import * as Icons from '@styled-icons/material-rounded';

const StyledIcon = styled.span`
  color: ${(props) => props.color || 'inherit'};
  display: inline-flex;
  align-items: center;
`;

function Icon({ name, size, ...props }) {
  const SelectedIcon = Icons[name];
  const iconSize = size || '12px';
  return (
    <StyledIcon {...props}>
      <SelectedIcon size={iconSize} />
    </StyledIcon>
  );
}

export default Icon;

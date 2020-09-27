import React from 'react';
import styled from 'styled-components';
import Icon from './Icon.component';
import IconLabel from './IconLabel.component';
import searchElement from '../../utils/elementSearch';

const LabeledIconContainer = styled.span`
  display: flex;
  align-items: center;
`;

function LabeledIcon({ name, label, children }) {
  let childLabel;
  let childIcon;

  if (children) {
    childLabel = searchElement(children, IconLabel);
    childIcon = searchElement(children, Icon);
  }

  return (
    <LabeledIconContainer>
      {name ? <Icon name={name} size="24px" /> : childIcon}
      {label ? <IconLabel>{label}</IconLabel> : childLabel}
    </LabeledIconContainer>
  );
}

export default LabeledIcon;

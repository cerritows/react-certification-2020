import React from 'react';
import styled from 'styled-components';
import ThemeCatalog from '../../utils/ThemeCatalog';

import { useTheme } from '../../providers/Theme/ThemeName.provider';

import { Select, Option, InputLabel } from '../Input';

const Container = styled.div`
  border-left: 1px solid ${(props) => props.theme.backgroundColor};
  padding-left: 10px;
`;

function ThemeSelector() {
  const setTheme = useTheme();

  const changeTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <Container direction="column" align="flex-start">
      <InputLabel size="0.75rem">Theme</InputLabel>
      <Select onChange={changeTheme}>
        {Object.keys(ThemeCatalog).map((theme) => (
          <Option key={theme} label={ThemeCatalog[theme].displayName} value={theme} />
        ))}
      </Select>
    </Container>
  );
}

export default ThemeSelector;

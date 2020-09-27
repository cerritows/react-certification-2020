import React from 'react';
import ThemeCatalog from '../../utils/ThemeCatalog';

import { useTheme } from '../../providers/Theme/ThemeName.provider';

function ThemeSelector() {
  const setTheme = useTheme();
  console.log('Themes: s :', setTheme);

  const changeTheme = (e) => {
    console.log('Change theme');
    setTheme(e.target.value);
  };

  return (
    <div>
      {Object.keys(ThemeCatalog).map((theme) => {
        return (
          <span key={ThemeCatalog[theme].id}>
            <input
              type="radio"
              id={ThemeCatalog[theme].id}
              name="theme"
              value={ThemeCatalog[theme].id}
              onClick={changeTheme}
            />
            <label htmlFor={ThemeCatalog[theme].id}>
              {ThemeCatalog[theme].displayName}
            </label>
          </span>
        );
      })}
    </div>
  );
}

export default ThemeSelector;

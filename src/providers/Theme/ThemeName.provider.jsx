import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemesCatalog from '../../utils/ThemeCatalog';

const ThemeContext = React.createContext(null);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState('defaultTheme');

  return (
    <ThemeContext.Provider value={setTheme}>
      <ThemeProvider theme={ThemesCatalog[theme].theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { useTheme };
export default CustomThemeProvider;

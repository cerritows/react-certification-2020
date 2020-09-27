import themes from './settings/themes.json';

const defaultTheme = {
  displayName: 'Purple',
  theme: {
    primaryColor: '#580266',
    secondaryColor: '#f1e6f2',
    backgroundColor: '#eae8eb',
  },
};

const ThemeCatalog = {
  defaultTheme,
  ...themes,
};

export default ThemeCatalog;

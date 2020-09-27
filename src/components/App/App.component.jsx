import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import FavoritesProvider from '../../providers/Favorites';
import CustomThemeProvider from '../../providers/Theme/ThemeName.provider';

import HomePage from '../../pages/Home';

import VideoPage from '../../pages/Video/VideoDetail.page';
import LoginPage from '../../pages/Login';
import FavoritesPage from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';

import GlobalStyle from '../Style';

import TopBar from '../TopBar';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
          <CustomThemeProvider>
            <GlobalStyle />
            <TopBar />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/video/:id" component={VideoPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/favorites" component={FavoritesPage} />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </CustomThemeProvider>
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

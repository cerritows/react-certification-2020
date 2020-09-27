import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { NavBar, NavBarItem } from '../Nav';
import { useAuth } from '../../providers/Auth';
import { BorderlessButton } from '../Button';

import { LabeledIcon, IconLabel, Icon } from '../Icon';

function TopBar() {
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  const deauthenticate = () => {
    logout();
    history.push('/');
  };

  return (
    <NavBar>
      <NavBarItem align="left">
        <Link to="/">
          <LabeledIcon name="Home" size="24" label="Home" />{' '}
        </Link>
      </NavBarItem>

      {authenticated ? (
        <NavBarItem align="right">
          <BorderlessButton type="submit" onClick={deauthenticate}>
            <LabeledIcon name="Person" size="24" label="Logout" />
          </BorderlessButton>
        </NavBarItem>
      ) : (
        <NavBarItem align="right">
          <Link to="/login">
            <LabeledIcon name="Person" size="24" label="Login" />
          </Link>
        </NavBarItem>
      )}

      {authenticated && (
        <NavBarItem align="right">
          <Link to="/favorites">
            <LabeledIcon>
              <Icon name="Star" size="20px" />
              <IconLabel>Favorites</IconLabel>
            </LabeledIcon>
          </Link>
        </NavBarItem>
      )}
    </NavBar>
  );
}

export default TopBar;

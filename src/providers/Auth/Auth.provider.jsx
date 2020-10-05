import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, USER_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

import { AuthAPI } from '../../utils/apis';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    const loggedInUser = storage.get(USER_STORAGE_KEY);

    setUser(loggedInUser);
    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback((username, password) => {
    setError(null);
    setIsLoading(true);
    AuthAPI.login(username, password).then((data) => {
      if (data.authenticated) {
        setAuthenticated(true);
        setUser(data.user);
        storage.set(AUTH_STORAGE_KEY, true);
        storage.set(USER_STORAGE_KEY, data.user);
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    });
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, authenticated, isLoading, user, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;

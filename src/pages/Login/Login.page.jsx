import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { LoginForm } from '../../components/Forms';

import { useAuth } from '../../providers/Auth';

function LoginPage() {
  const { login, isLoading, authenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (authenticated) {
      console.log('Done');
      history.push('/');
    }
  }, [authenticated, history]);

  return <LoginForm isLoading={isLoading} onSubmit={login} />;
}

export default LoginPage;

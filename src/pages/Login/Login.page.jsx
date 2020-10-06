import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { LoginForm } from '../../components/Forms';
import Container from '../../components/Layout';
import Message from '../../components/Message';

import { useAuth } from '../../providers/Auth';

function LoginPage() {
  const { login, isLoading, authenticated, error } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  }, [authenticated, history]);

  return (
    <Container align="center" direction="column">
      <h1>Welcome back</h1>
      {error && <Message type="alert">{error}</Message>}
      <LoginForm isLoading={isLoading} onSubmit={login} />;
    </Container>
  );
}

export default LoginPage;

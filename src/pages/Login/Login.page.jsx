import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';

import Container, { Part } from '../../components/Layout';
import { InputGroup, InputLabel, TextInput } from '../../components/Input';
import { FilledButton } from '../../components/Button';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  console.log('Login');

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/');
  }

  return (
    <Container align="center">
      <Part align="center" bg="8" md="10">
        <h1>Welcome back!</h1>
      </Part>

      <Part bg="6" md="10">
        <form onSubmit={authenticate} className="login-form">
          <InputGroup>
            <InputLabel htmlFor="username">
              <strong>User</strong>
              <TextInput required type="text" id="username" />
            </InputLabel>
          </InputGroup>

          <InputGroup>
            <InputLabel htmlFor="password">
              <strong>Password</strong>
              <TextInput required type="password" id="password" />
            </InputLabel>
          </InputGroup>
          <FilledButton type="submit">Login</FilledButton>
        </form>
      </Part>
    </Container>
  );
}

export default LoginPage;

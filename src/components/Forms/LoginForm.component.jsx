import React, { useState } from 'react';

import Container, { Part } from '../Layout';
import { InputGroup, InputLabel, TextInput } from '../Input';
import { FilledButton } from '../Button';

import withLoader from '../Loader';

function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <Container align="center">
      <Part align="center" bg="8" md="10">
        <h1>Welcome back</h1>
      </Part>

      <Part bg="6" md="10">
        <form onSubmit={submitForm} className="login-form">
          <InputGroup>
            <InputLabel htmlFor="username">
              <strong>User</strong>
              <TextInput
                required
                type="text"
                id="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </InputLabel>
          </InputGroup>

          <InputGroup>
            <InputLabel htmlFor="password">
              <strong>Password</strong>
              <TextInput
                required
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </InputLabel>
          </InputGroup>
          <FilledButton type="submit">LOGIN</FilledButton>
        </form>
      </Part>
    </Container>
  );
}

export default withLoader(LoginForm);

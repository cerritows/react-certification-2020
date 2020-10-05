import React, { useState, useCallback } from 'react';

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

  const setFormUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const setFormPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <Container align="center">
      <Part bg="6" md="10">
        <form onSubmit={submitForm} className="login-form">
          <InputGroup>
            <InputLabel htmlFor="username">
              <strong>User</strong>
              <TextInput required type="text" id="username" onChange={setFormUsername} />
            </InputLabel>
          </InputGroup>

          <InputGroup>
            <InputLabel htmlFor="password">
              <strong>Password</strong>
              <TextInput
                required
                type="password"
                id="password"
                onChange={setFormPassword}
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

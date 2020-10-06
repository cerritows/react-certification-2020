import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthProvider, { useAuth } from '../providers/Auth';
import Users from '../utils/settings/users.json';

describe('Auth provider: ', () => {
  const TestComponent = ({ username, password }) => {
    const { login, authenticated, isLoading, logout, error } = useAuth();

    const mockLogin = () => {
      login(username, password);
    };

    return (
      <div>
        <button type="button" onClick={mockLogin}>
          Login
        </button>
        <button type="button" onClick={logout}>
          Logout
        </button>
        <p>{isLoading && 'Loading Auth'}</p>
        <p>{error && 'Error ocurred'}</p>
        <p>{authenticated && 'Authenticated'}</p>
      </div>
    );
  };

  const validUser = Object.keys(Users)[0];
  const validPassword = Users[validUser].password;
  // it('should throw an exception when using authentication hook without a provider', () => {
  //   expect(() => {
  //     render(<TestComponent />);
  //   }).toThrow(`Can't use "useAuth" without an AuthProvider!`);
  // });

  it('should allow to log in with valid user', async () => {
    render(
      <AuthProvider>
        <TestComponent username={validUser} password={validPassword} />
      </AuthProvider>
    );

    userEvent.click(screen.getByText('Login'));

    await waitFor(() => screen.queryByText('Loading Auth'));
    await waitFor(() => expect(screen.queryByText('Loading Auth')).toBeNull());

    expect(screen.getByText('Authenticated')).not.toBeNull();
  });

  it('should allow to logout', async () => {
    render(
      <AuthProvider>
        <TestComponent username={validUser} password={validPassword} />
      </AuthProvider>
    );

    userEvent.click(screen.getByText('Login'));

    await waitFor(() => screen.queryByText('Loading Auth'));
    await waitFor(() => expect(screen.queryByText('Loading Auth')).toBeNull());

    userEvent.click(screen.getByText('Logout'));

    expect(screen.queryByText('Authenticated')).toBeNull();
  });

  it('should return an error message when failed to login', async () => {
    render(
      <AuthProvider>
        <TestComponent username="user1" password="1234" />
      </AuthProvider>
    );

    userEvent.click(screen.getByText('Login'));

    await waitFor(() => screen.queryByText('Loading Auth'));
    await waitFor(() => expect(screen.queryByText('Loading Auth')).toBeNull());

    expect(screen.queryByText('Authenticated')).toBeNull();
    expect(screen.queryByText('Error ocurred')).not.toBeNull();
  });
});

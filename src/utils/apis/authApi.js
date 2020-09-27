import Users from '../settings/users.json';

function later(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

async function login(username, password) {
  await later(3000);
  const isValidUser = Users[username] && Users[username].password === password;
  return { authenticated: isValidUser, user: username };
}

const AuthAPI = {
  login,
};

export default AuthAPI;

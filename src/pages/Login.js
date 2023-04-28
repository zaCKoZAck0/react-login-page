import React from 'react';
const Login = () => {
  return (<>
  <h1>Login</h1>
  <label htmlFor="username">Enter Username</label>
  <input type="text" placeholder="Username" />
  <label htmlFor="password">Password</label>
  <input type="text" placeholder="Password" />
  <button>Login</button>
  </>);
};

export default Login;

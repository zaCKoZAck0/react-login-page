import React from 'react';
const Signup = () => {
  return (
    <>
      <h1>Signup</h1>
      <label htmlFor="username">Enter Username</label>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="password">Enter Password</label>
      <input type="text" placeholder="Password" />
      <label htmlFor="password2">Enter password again</label>
      <input type="text" placeholder="Password" />
      <button>Signup</button>
    </>
  );
};

export default Signup;

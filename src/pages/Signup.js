import React from 'react';
const Signup = () => {
  return (
    <>
      <h1>Signup</h1>
      <label htmlFor="username">Enter Username</label>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="email">Enter Email</label>
      <input type="text" name="email" placeholder="email" />
      <label htmlFor="password">Enter Password</label>
      <input type="text" placeholder="Password" />
      <label htmlFor="password2">Re-enter Enter password</label>
      <input type="text" placeholder="Password" />
      <button className="btn btn-primary">Signup</button>
    </>
  );
};

export default Signup;

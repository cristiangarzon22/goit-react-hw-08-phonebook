import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const FormLogin = () => {
    const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = {
      email: e.target.elements['email'].value,
      password: e.target.elements['password'].value,
    };
    dispatch(logIn(usuario));
    console.log(usuario);
  
  };

  return (
    <form id="formRegister" onSubmit={handleSubmit}>
      <input name="email" type="text" />
      <input name="password" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

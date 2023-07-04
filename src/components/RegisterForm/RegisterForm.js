import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const FormRegister = () => {
    const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(register({
      name: e.target.elements['nombre'].value,
      email: e.target.elements['numero'].value,
      password: e.target.elements['email'].value,
    }
    ));
    
  };

  return (
    <form id="formRegister" onSubmit={handleSubmit}>
      <input name="nombre" type="text" />
      <input name="numero" type="text" />
      <input name="email" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

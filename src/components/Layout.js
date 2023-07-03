import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './Layout.module.css';

export const NavigationBar = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink
          className={css.link}
          to="/register"
        >
          Register
        </NavLink>

        <NavLink
          className={css.link}
          to="/logIn"
        >
          Log In
        </NavLink>
        <NavLink 
        className={css.link}
        to="/"
        >
          Home
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default NavigationBar;

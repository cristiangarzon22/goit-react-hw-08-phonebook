import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import css from '../layout/Layout.module.css';

import UserMenu from 'components/userMenu/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box
        bgGradient="linear(to-r, teal.500, blue.500)"
        boxShadow="2xl"
        height="90px"
        py={4}
      >
        <NavLink className={css.link} to="/">
          <Button colorScheme="yellow" variant="outline">
            Home
          </Button>
        </NavLink>
        {isLoggedIn ? (
          <NavLink className={css.link} to="/contacts">
            <Button colorScheme="blue" variant="outline">
              Contacts
            </Button>
          </NavLink>
        ) : (
          <>
            <NavLink className={css.link} to="/register">
              <Button colorScheme="purple" variant="outline">
                Register
              </Button>
            </NavLink>
            <NavLink className={css.link} to="/login">
              <Button colorScheme="blue" variant="outline">
                Log In
              </Button>
            </NavLink>
          </>
        )}
        {}
      </Box>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;

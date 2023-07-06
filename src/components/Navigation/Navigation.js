import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

//import { useAuth } from 'hooks';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

 
  return (
    <nav>
      <NavLink  to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/ContactLists">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

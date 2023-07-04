import Home from "pages/Home";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { Route, Routes } from 'react-router-dom';
import { NavigationBar } from "./Layout";
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';  

import ContactLists from "pages/Contacts";

export const App = () => {
    return(
        <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route path="/" element={<Home />} />
          <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/ContactLists" component={<Register />} />
          }
        />
          <Route
          path="logIn"
          element={
            <RestrictedRoute redirectTo="/ContactLists" component={<Login />} />
          }
        />
        <Route
          path="ContactLists"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactLists />} />
          }
        />
        </Route>
      </Routes>
      
       
    );
}
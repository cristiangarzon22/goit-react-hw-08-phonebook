import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/operations";

const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/register"));
const Login = lazy(() => import("./pages/login"));
const Contacts = lazy(() => import("./pages/contacts"));
const CreateContact = lazy(() => import("./pages/CreateContact"));

export const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.contacts);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser(token));
    }
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <RestrictedRoute
              component={<Home />}
              redirectTo="/Contacts"
            />
          }
          default 
        />
        <Route
          path="/Register" 
          element={
            <RestrictedRoute
              component={<Register />}
              redirectTo="/Contacts"
            />
          }
        />
        <Route
          path="/Login" 
          element={
            <RestrictedRoute
              component={<Login />}
              redirectTo="/Contacts"
            />
          }
        />
        <Route
          path="/Contacts" 
          element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
        />
        <Route
          path="/create-contact" 
          element={
            <PrivateRoute redirectTo="/" component={<CreateContact />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

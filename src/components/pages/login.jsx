import { useDispatch, useSelector } from "react-redux";
import { clearError, clearFormError, setFormError } from "redux/addContacts/addContacts";
import { login } from "redux/operations";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();
  const { formError, error, isLoading } = useSelector((state) => state.contacts);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    if (email.value && password.value) {
      dispatch(login(credentials));
    } else {
      dispatch(setFormError("Verify the provided info and try again."));
    }
  };

  useEffect(() => {
    if (formError) {
      toast.error(formError);
      dispatch(clearFormError());
    }
  }, [dispatch, formError]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);

  return (
    <div
      style={{
        height: "calc(100vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          padding: 15,
        }}
      >
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Email
          <input type="text" name="email" />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit" style={{ marginTop: 20 }} disabled={isLoading}>
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Login;

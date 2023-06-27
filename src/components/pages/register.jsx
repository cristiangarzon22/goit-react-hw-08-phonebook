import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/operations";
import { clearError, clearFormError, setFormError } from "redux/addContacts/addContacts";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

function Register() {
  const dispatch = useDispatch();
  const { formError, error, isLoading } = useSelector((state) => state.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    } = e.target.elements;
    const credentials = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    if (firstName.value && lastName.value && email.value && password.value) {
      dispatch(register(credentials));
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
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          padding: 15,
          marginTop: 25,
        }}
      >
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          First name <i style={{ fontSize: 12 }}>(5 - 12 chars)</i>
          <input type="text" name="first_name" pattern="\w{5,12}" />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Last name <i style={{ fontSize: 12 }}>(5 - 12 chars)</i>
          <input type="text" name="last_name" pattern="\w{5,12}" />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Email
          <input type="email" name="email" />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Password <i style={{ fontSize: 12 }}>(5 - 12 chars)</i>
          <input type="password" name="password" />
        </label>
        <button type="submit" style={{ marginTop: 20 }}>
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Register;

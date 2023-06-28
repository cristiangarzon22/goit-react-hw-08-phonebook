import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchContacts } from "redux/operations";

function Contacts() {
  const dispatch = useDispatch();
  const { isLoading, items } = useSelector((state) => state.contacts);
  const { token } = useSelector((state) => state.contacts);
//k
  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [token, dispatch]);

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
      <h3>
        <NavLink
          to="/create-transaction"
          style={{
            textDecoration: "none",
            color: "unset",
            borderBottom: "2px solid black",
          }}
        >
          Create a new contact
        </NavLink>
      </h3>
      {isLoading ? (
        <h2>Fetching contacts...</h2>
      ) : (
        <ul>
          {items.map((element) => (
            <li key={element.id}>
              {element.name} - {element.number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Contacts;

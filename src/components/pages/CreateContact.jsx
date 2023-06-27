import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../redux/operations';
import { Report } from 'notiflix/build/notiflix-report-aio';
import css from '../form_css/form.module.css';
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  clearError,
  clearFormError,
  clearMessage,
} from "redux/addContacts/addContacts";
import { useNavigate } from "react-router-dom";
import { addContact } from 'redux/operations';
//import { nanoid } from 'nanoid';

const Bar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const contactsString = useSelector((state) => JSON.stringify(state.contacts.items));
  const contacts = JSON.parse(contactsString);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const { token } = useSelector((state) => state.contacts);
  const { isLoading, error, formError, message } = useSelector(
    (state) => state.contacts
  );

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setNumber(inputValue);
      setShowWarning(false);
    } else {
      setNumber(inputValue);
      setShowWarning(true);
    }
  };

  
  const newContactAudit = (newContact) => {
    return contacts.filter(
      (contact) => contact.text && newContact.text && contact.text.toLowerCase() === newContact.text.toLowerCase()
    );
  };
  
  const contactFormSubmitHandler = (newContact) => {
    if (newContactAudit(newContact).length > 0) {
      Report.failure(
        'Usuario no Admitido',
        'EL USUARIO YA SE ENCUENTRA REGISTRADO',
        'Aceptar',
        );
      return false;
    } else if(newContact.text.trim() === '' || newContact.completed.trim() === ''){
      Report.warning(
        'Campos Vacios',
        'POR FAVOR RELLENE TODOS LOS CAMPOS!!!',
        'Aceptar',
        );
    }
     else {
      dispatch(addContact({ token, newContact }));
      Report.success(
        'Usuario Almacenado',
        'EL USUARIO HA SIDO AGREGADO CON EXITO!!!',
        'Aceptar',
        );
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      //id: nanoid(),
      name,
      number,
    };

    if (contactFormSubmitHandler(newContact)) {
      setName('');
      setNumber('');
    }
  };

/////////////


  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, message]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (formError) {
      toast.error(formError);
      dispatch(clearFormError());
    }
  }, [dispatch, formError]);

  return (
    /////
    <>
        <form onSubmit={handleSubmit} className={css.form}>
        <h3 className={css.title}>Add Contact</h3>
        <input
          className={css.int}
          type="text"
          placeholder="Name"
          value={text}
          onChange={handleNameChange}
          autoComplete="on"
        />
        <input
          className={css.int}
          type="text"
          placeholder="Number"
          value={completed}
          onChange={handleNumberChange}
          autoComplete="on"
          pattern="\d*"
        />
        {showWarning && <div className={css.warning}>Solo se permiten números</div>}
        <button className={css.btn} type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
      <h3
        style={{
          textDecoration: "none",
          color: "unset",
          borderBottom: "2px solid black",
          cursor: "pointer",
        }}
        onClick={() => nav(-1)}
    ///Filter
      >
        Go back to transaction list
      </h3>
      

    </>
  );
};

export default Bar;



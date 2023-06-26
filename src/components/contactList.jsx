import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTask} from 'redux/operations';
import { fetchTasks } from "redux/operations";
import { useEffect } from "react";
import css from '../List_css/List.module.css';

const List = () => {
  const dispatch = useDispatch();
  const contactsString = useSelector((state) => JSON.stringify(state.contacts.items));
  const filter1 = useSelector((state) => state.contacts.filter);

  const deleteContactHandler = (id) => {
    dispatch(deleteTask(id));
  };
  
  const filterValueLowerCase = filter1?.toLowerCase();

  const contacts = JSON.parse(contactsString);

  const visibleContacts = contacts?.filter((contact) => {
    return contact.text?.toLowerCase().includes(filterValueLowerCase);
  });
  
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <ul className={css.list}>   
  {visibleContacts && visibleContacts.length > 0 ? (
    visibleContacts.map((e) => (
      <li className={css.item} key={e.id}>
        {e.text}:{e.completed}{' '}
        <button
          className={css.button}
          type="button"
          onClick={() => deleteContactHandler(e.id)}
        >
          Delete
        </button>
      </li>
    ))
  ) : (
    contacts.map((e) => (
      <li className={css.item} key={e.id}>
        {e.text}:{e.completed}:{e.id}
        <button
          className={css.button}
          type="button"
          onClick={() => deleteContactHandler(e.id)}
        >
          Delete
        </button>
      </li>
    ))
  )}
</ul>

);
};

export default List;

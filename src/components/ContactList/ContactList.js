import { useSelector } from 'react-redux';
import { Contacts } from '../Contact/Contact';
import { SelectAllContacts } from 'redux/contacts/selectors';


export const ContactList = () => { 
  const contact = useSelector(SelectAllContacts);

  return (
    <ul >
      {contact.map(({ id, text }) => (
        <li key={id}>
          <Contacts id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};


import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import ContactLists from 'pages/Contacts';

export const ContactEditor = () => {
  const Dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.text.value;
    const number = form.elements.number.value;
    if (name !== '' && number !== '') { 
      Dispatch(addContacts(
        { name, number }
      ));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <>
    <form  onSubmit={handleSubmit}>
      <input name="text" /> 
      <input name="number" />
      <button type="submit" >
        Add task
      </button>
    </form>
    <ContactLists/>
    </>
  );
};

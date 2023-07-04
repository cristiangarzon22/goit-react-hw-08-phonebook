import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';


export const Contacts = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div >
      <p >{text}</p>
      <button type="button"  onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

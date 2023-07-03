import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/task/operations';


export const Task = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div >
      <p >{text}</p>
      <button type="button"  onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

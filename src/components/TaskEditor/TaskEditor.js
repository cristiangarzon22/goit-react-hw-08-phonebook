import { useDispatch } from 'react-redux';
import { addTask } from 'redux/task/operations';


export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input name="text" />
      <button type="submit" >
        Add task
      </button>
    </form>
  );
};

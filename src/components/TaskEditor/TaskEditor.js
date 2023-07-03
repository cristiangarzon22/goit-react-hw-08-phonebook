import { useDispatch } from 'react-redux';
import { addTask } from 'redux/task/operations';


export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    const number = form.elements.number.value;
    if (text !== '' && number !== '') {
      dispatch(addTask(
        {
          name:text,
          number:number
        }
      ));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input name="text" />
      <input name="number" />
      <button type="submit" >
        Add task
      </button>
    </form>
  );
};

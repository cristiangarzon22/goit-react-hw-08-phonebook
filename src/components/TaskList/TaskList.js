import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from 'redux/task/selectors';


export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul >
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};


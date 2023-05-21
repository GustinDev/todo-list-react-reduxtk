import { Link } from 'react-router-dom';
import { TaskForm } from './TaskForm';

const TaskEdit = () => {
  return (
    <div>
      <Link to='/'>
        <TaskForm />
        <button>Back</button>
      </Link>
    </div>
  );
};

export default TaskEdit;

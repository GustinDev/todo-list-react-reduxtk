import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/task/taskSlice';

// eslint-disable-next-line react/prop-types
const TaskCard = ({ id, name, description }) => {
  let dispatch = useDispatch();

  let handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <div key={id}>
        <h1>{name}</h1>
        <h4>{description}</h4>
        <button onClick={() => handleDelete(id)}>X</button>
      </div>
    </>
  );
};

export default TaskCard;

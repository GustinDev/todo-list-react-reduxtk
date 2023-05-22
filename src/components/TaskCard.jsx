import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/task/taskSlice';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TaskCard = ({ id, name, description }) => {
  let dispatch = useDispatch();

  let handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div
      className='w-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 m-5'
      key={id}
    >
      <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {name}
      </h1>
      <h4 className='mb-3 font-normal text-gray-700 dark:text-gray-300'>
        {description}
      </h4>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
      <Link to={`/edit/${id}`}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'>
          Edit
        </button>
      </Link>
    </div>
  );
};

export default TaskCard;

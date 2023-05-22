/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//ID:
import { v4 as uuid } from 'uuid';
//Reducers:
import { addTask, editTask } from '../features/task/taskSlice';
//React-Router-Dom
import { useParams, useNavigate } from 'react-router-dom';

export const TaskForm = () => {
  //Dispara eventos - reducers.
  const dispatch = useDispatch();

  const [valueInput, setValueInput] = useState({
    name: '',
    description: '',
  });

  let onInputChange = ({ target }) => {
    //Los datos vienen por event.target.value, los desestructuramos.
    const { name, value } = target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  //EDIT:

  let tasks = useSelector((state) => state.tasksUser.tasks);

  const params = useParams();
  useEffect(() => {
    if (params.id) {
      let taskToEdit = tasks.find((task) => task.id === params.id);
      setValueInput(taskToEdit);
      console.log(taskToEdit);
    }
  }, []);

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    //Edit:
    if (params.id) {
      //Si hay ID, le pasamos el objeto (nuevo).
      dispatch(editTask(valueInput));
    } else {
      //Crear: Despachamos el reducer y por parámetros la data (el payload).
      dispatch(
        addTask({
          ...valueInput,
          id: uuid(),
          completed: false,
        })
      );
    }

    setValueInput({
      name: '',
      description: '',
    });

    navigate('/');
  };

  return (
    <div className='cotainer flex w-8/12 justify-center content-center'>
      <form
        className='flex flex-col w-8/12 justify-center content-center items-center'
        onSubmit={handleSubmit}
      >
        <input
          className='bg-gray-50 border m-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-50 dark:focus:border-blue-500'
          name='name'
          type='text'
          placeholder='title'
          onChange={onInputChange}
          value={valueInput.name}
        />
        <textarea
          className='m-5 bg-gray-50 border m-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-50 dark:focus:border-blue-500'
          name='description'
          cols='10'
          rows='2'
          placeholder='description'
          onChange={onInputChange}
          value={valueInput.description}
        ></textarea>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'
          type='submit'
        >
          Save Task
        </button>
      </form>
    </div>
  );
};

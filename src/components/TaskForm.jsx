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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='title'
          onChange={onInputChange}
          value={valueInput.name}
        />
        <textarea
          name='description'
          cols='30'
          rows='10'
          placeholder='description'
          onChange={onInputChange}
          value={valueInput.description}
        ></textarea>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

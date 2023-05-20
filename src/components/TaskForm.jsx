import { useState } from 'react';
import { useDispatch } from 'react-redux';
//ID:
import { v4 as uuid } from 'uuid';
//Reducers:
import { addTask } from '../features/task/taskSlice';

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

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(valueInput);
    //Despachamos el reducer y por parámetros la data (el payload).
    dispatch(
      addTask({
        ...valueInput,
        id: uuid(),
        completed: false,
      })
    );

    setValueInput({
      name: '',
      description: '',
    });
  };

  return (
    <div>
      <h1>Add Tasks</h1>
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

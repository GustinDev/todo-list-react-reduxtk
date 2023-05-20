import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

//Aqui creamos los reducers (slice).
export const taskSlice = createSlice({
  //Le ponemos un nombre y lo pasamos junto con el estado inicial.
  name: 'taskSlice', //Ponerle el mismo nombre que se le pone al de la store.
  initialState,
  //Ponemos los reducer normalmente (como funciones en un objeto):
  reducers: {
    //Al depacharla recibimos por parámetro el payload: la data. El type es el nombre de la fun.
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

//Exportamos los reducers
export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

//Estado inicial.
const initialState = {
  tasks: [],
};

//Aqui creamos los reducers (slice).
export const taskSlice = createSlice({
  //Le ponemos un nombre y lo pasamos con el estado inicial.
  name: 'taskManager',
  initialState,
  //Ponemos los reducer normalmente (como funciones en un objeto):
  //Accedemos a los estados normalmente:
  reducers: {
    taskStart: (state) => {
      state.tasks = [];
    },
  },
});

//Exportamos los reducers
export const { taskStart } = taskSlice.actions;

export default taskSlice.reducer;

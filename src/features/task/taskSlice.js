import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, name: 'Play', description: 'Rank in Valorant', complete: false },
  ],
};

//Aqui creamos los reducers (slice).
export const taskSlice = createSlice({
  //Le ponemos un nombre y lo pasamos junto con el estado inicial.
  name: 'taskSlice', //Ponerle el mismo nombre que se le pone al de la store.
  initialState,
  //Ponemos los reducer normalmente (como funciones en un objeto):
  reducers: {
    taskStart: (state) => {
      console.log(state.tasks);
    },
  },
});

//Exportamos los reducers
export const { taskStart } = taskSlice.actions;

export default taskSlice.reducer;

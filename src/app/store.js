import { configureStore } from '@reduxjs/toolkit';
//Reducer
import { taskSlice } from '../features/task/taskSlice';

export const store = configureStore({
  //Añadimos el reducer.
  reducer: {
    task: taskSlice,
  },
});

//Aquí creamos el store, es como una DB (en Front) para los estados de redux.

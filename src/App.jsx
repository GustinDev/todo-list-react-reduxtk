import './App.css';
// import { useSelector } from 'react-redux';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

function App() {
  //Entramos a las task definidas en initial State (taskSlice).
  // const tasksState = useSelector((state) => state.tasks);

  return (
    <>
      <h1>To Do List</h1>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;

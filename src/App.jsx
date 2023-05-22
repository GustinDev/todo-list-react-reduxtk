import './App.css';
// import { useSelector } from 'react-redux';

BrowserRouter;
//Standard Import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskContainer from './components/TaskContainer';
//import TaskEdit from './components/TaskEdit';
import { TaskForm } from './components/TaskForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskContainer />} />
        <Route path='/edit/:id' element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

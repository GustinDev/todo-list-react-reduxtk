import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';

const TaskContainer = () => {
  return (
    <div className='cotainer flex flex-col justify-center items-center w-full'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black'>
        ToDo App
      </h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskContainer;

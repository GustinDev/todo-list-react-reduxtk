import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

export const TaskList = () => {
  //Tomamos el nombre de la store/slice y el nombre de initial state.
  let taskList = useSelector((state) => state.tasksUser.tasks);

  console.log(taskList);

  return (
    <div className='w-full m-5 flex items-center justify-center flex-col'>
      <h1 className='text-4xl font-extrabold text-black '>Current Tasks:</h1>
      <div className='flex flex-row flex-wrap  items-center justify-center'>
        {taskList.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
};

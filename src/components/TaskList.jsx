import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

export const TaskList = () => {
  //Tomamos el nombre de la store/slice y el nombre de initial state.
  let taskList = useSelector((state) => state.tasksUser.tasks);

  console.log(taskList);

  return (
    <div className='w-6/12'>
      <h1 className=''>List:</h1>
      <div className='flex flex-row'>
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

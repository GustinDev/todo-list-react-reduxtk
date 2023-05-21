import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

export const TaskList = () => {
  //Tomamos el nombre de la store/slice y el nombre de initial state.
  let taskList = useSelector((state) => state.tasksUser.tasks);

  console.log(taskList);

  return (
    <div>
      <h1 className='font-mono ...'>List:</h1>
      {taskList.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
        />
      ))}
    </div>
  );
};

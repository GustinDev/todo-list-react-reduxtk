import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

export const TaskList = () => {
  //Tomamos el nombre de la store/slice y el nombre de initial state.
  let taskList = useSelector((state) => state.tasksUser.tasks);

  console.log(taskList);

  return (
    <div>
      <h1>List:</h1>
      {taskList.map((task, index) => (
        <TaskCard
          key={index}
          id={task.id}
          name={task.name}
          description={task.description}
        />
      ))}
    </div>
  );
};

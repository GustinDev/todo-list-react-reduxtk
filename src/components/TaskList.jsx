import { useSelector } from 'react-redux';

export const TaskList = () => {
  //Tomamos el nombre de la store/slice y el nombre de initial state.
  let taskList = useSelector((state) => state.tasksUser.tasks);

  console.log(taskList);

  return (
    <div>
      <h1>List:</h1>
      {taskList.map((task) => (
        <div key={task.id}>
          <h1>{task.name}</h1>
          <h1>{task.description}</h1>
        </div>
      ))}
    </div>
  );
};

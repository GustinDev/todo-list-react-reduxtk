// eslint-disable-next-line react/prop-types
const TaskCard = ({ id, name, description }) => {
  return (
    <div>
      <div key={id}>
        <h1>{name}</h1>
        <h1>{description}</h1>
      </div>
    </div>
  );
};

export default TaskCard;

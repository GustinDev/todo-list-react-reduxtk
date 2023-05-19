// eslint-disable-next-line react/prop-types
const TaskCard = ({ id, name, description }) => {
  return (
    <>
      <div key={id}>
        <h1>{name}</h1>
        <h4>{description}</h4>
        <button>X</button>
      </div>
    </>
  );
};

export default TaskCard;

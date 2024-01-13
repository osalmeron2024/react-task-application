import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  //Con esto tengo acceso al contexto, por ejemplo a deleteTask
  const {deleteTask} = useContext(TaskContext);
  

  //destructurando el objeto o props, accedo directo a task
  // tambien prodia acceder mediante props.task
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description} </p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar...</button>
    </div>
  );
}

export default TaskCard;

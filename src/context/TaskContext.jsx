import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  //para almacenar el varlor del arrglo tasks
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    //La funcion recive un objeto java task
    // copiar todos los valores de tasks ...tasks y agregar una tarea ,task
    // tasks es un objeto de javascript
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskid) {
    setTasks(tasks.filter((task) => task.id !== taskid));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

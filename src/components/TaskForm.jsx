import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title);
    // const newTask = {
    //   title: title // esto se puede resumir asi {title}
    // };
    createTask({
      title,
      description,
    });
    // Para limpiar los valores de la caja de texto y text area
    //Ponemos a vacio el title y description, mediante sus fuciones
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Agrega tu Tarea</h1>
      <input
        placeholder="Escriba su tarea..."
        onChange={(e) => setTitle(e.target.value)}
        value={title} //Limpia el contenido del textbox
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus //Para establecer el focus en el textbox
      />
      <textarea
        placeholder="Escriba la descripcion de la tarea..."
        onChange={(e) => setDescription(e.target.value)}
        value={description} // Para limpiar el contenido del textarea
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-slate-900">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;

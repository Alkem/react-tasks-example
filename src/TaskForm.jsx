import { useState, useContext } from "react"
import {TaskContext} from "./context/TaskContext.jsx"

function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {createTask} = useContext(TaskContext);

    const taskHandler = (e) =>{
        e.preventDefault();
        createTask({
            title,
            description
        });

        setDescription("");
        setTitle("");
    }


  return (
    <div className="max-w-md mx-auto">
        <form className="bg-slate-800 p-10 mb-4" onSubmit={taskHandler}> 
            <h1 className="text-2xl font-bold text-white mb-3">Agrega tu tarea</h1>
            <input className="bg-slate-300 p-3 w-full mb-2" type="text" placeholder="Ingese nombre de tarea"  onChange={(e) => setTitle(e.target.value)} value={title} autoFocus/>
            <textarea className="bg-slate-300 p-3 w-full mb-2"  type="text" placeholder="descripcion de la tarea" onChange={(e) => setDescription(e.target.value) } value={description} />
            <button className="bg-indigo-500 px-3 py-1 text-white">Agregar</button>
        </form>
    </div>
  )
}

export default TaskForm
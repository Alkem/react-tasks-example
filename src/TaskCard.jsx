import {useContext} from "react"
import {TaskContext} from "./context/TaskContext.jsx"


function TaskCard({task}) {

    const {deleteTaskById} = useContext(TaskContext);


    const deleteTask = () => deleteTaskById(task.id) 



    return <div className="bg-gray-800 text-white p-4 rounded-md hover:scale-110"> 
                <h1 className="text-xl font-bold capitalize">{task.title}</h1>
                <p className="text-gray-500 text-sm">{task.description}</p> 
                <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={deleteTask}>Delete</button>
            </div>
}

export default TaskCard
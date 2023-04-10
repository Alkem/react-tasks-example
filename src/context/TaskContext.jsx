import {createContext, useState , useEffect} from "react"
import {tasks as data} from "../Task.js";


export const TaskContext = createContext()

export function TaskContextProvider(props) {
   
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data);
    }, [])


    const createTask = (task) =>{
      setTasks([...tasks, {
        id: tasks.length,
        title: task.title,
        description: task.description
      }])
    }

    const deleteTaskById = (id) =>{
        setTasks(tasks.filter(t => t.id != id));
    }



  return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTaskById
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}


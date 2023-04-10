
import TaskList from './TaskList'
import TaskForm from "./TaskForm.jsx";

export const App = () => {
  return (
    <main className='bg-zinc-800 h-screen'>
      <div className='container mx-auto p-10 '>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  )
}


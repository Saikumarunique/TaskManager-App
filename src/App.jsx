import Progresstracker from "./Components/Progresstracker"
import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"

function App() {
  return (
    <>
    <h1>Task Focus</h1>
    <p>Our friendly task manager</p>
    <TaskForm />
    <TaskList />
    <Progresstracker />
    <button>Clear Tasks</button>
    </>
  )
}

export default App
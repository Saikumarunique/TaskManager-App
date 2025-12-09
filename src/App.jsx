import React, { useState } from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import Progresstracker from './Components/Progresstracker'

export default function App() {
  const[tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(task);
  }
  return (
    <div>
      <header>
        <h1>Taskman</h1>
        <p><b>Your friendly Task Manager</b></p>
      </header>
      <TaskForm />
      <TaskList />
      <Progresstracker />
      <button>Clear Tasks</button>
    </div>
  )
}

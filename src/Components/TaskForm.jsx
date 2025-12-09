import React, { useState } from 'react'

export default function TaskForm() {
  let[task, setTask] = useState("")
  let[priority, setPriority] = useState("Medium")
  let[category, setCategory] = useState("General")

  const handlesubmit = () => {
    addTask({text:task, priority, category, completed:fales})
  }
  return (
    <div>
      <form className='task-form' onSubmit={handlesubmit}>
        <div id='inp'>
          <input type='text' placeholder='Enter the Task' onChange={(e)=> setTask(e.target.value)} />
          <span><button type = 'submit'>Add Task</button></span>
          <h1>{task} {priority} {category}</h1>
        </div>

        <div id='btns'>
          <select onChange={(e)=> setPriority(e.target.value)}> 
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

           <select onChange={(e)=> setCategory(e.target.value)}>
            <option value="General">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  )
}
import React from 'react'

export default function TaskForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Enter your task"></input>
        <button type='submit'>Add Task</button>
      </div>

      <div>
        <select>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

         <select>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  )
}

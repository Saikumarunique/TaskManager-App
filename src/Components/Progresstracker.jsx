import React from 'react';

export default function Progresstracker({ tasks }) {

  const totalTasks = tasks.length;

  // Number of completed tasks
  const completedTasks = tasks.filter(task => task.completed).length;

  // Progress percentage
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress-tracker">
      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

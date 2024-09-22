// components/WorkerDashboard.tsx
"use client"

import { useState, useEffect } from 'react'
import TaskList from './TaskList'
import TaskPopup from './TaskPopup'

export default function WorkerDashboard() {
  const [tasks, setTasks] = useState([])
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {
    // Fetch tasks from API
    // This is a placeholder and should be replaced with actual API call
    const fetchTasks = async () => {
      const response = await fetch('/api/worker-tasks')
      const data = await response.json()
      setTasks(data)
    }
    fetchTasks()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Worker Dashboard</h1>
      <TaskList
        title="Assigned Tasks"
        tasks={tasks}
        onTaskClick={setSelectedTask}
      />
      {selectedTask && (
        <TaskPopup task={selectedTask} onClose={() => setSelectedTask(null)} isWarden={false} />
      )}
    </div>
  )
}
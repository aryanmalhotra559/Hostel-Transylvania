// components/WardenDashboard.tsx
"use client"

import { useState, useEffect } from 'react'
import TaskList from './TaskList'
import TaskPopup from './TaskPopup'

export default function WardenDashboard() {
  const [tasks, setTasks] = useState({ pending: [], assigned: [] })
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {
    // Fetch tasks from API
    // This is a placeholder and should be replaced with actual API call
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks')
      const data = await response.json()
      setTasks(data)
    }
    fetchTasks()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Warden Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TaskList
          title="Pending Requests"
          tasks={tasks.pending}
          onTaskClick={setSelectedTask}
        />
        <TaskList
          title="Assigned Requests"
          tasks={tasks.assigned}
          onTaskClick={setSelectedTask}
        />
      </div>
      {selectedTask && (
        <TaskPopup task={selectedTask} onClose={() => setSelectedTask(null)} isWarden={true} />
      )}
    </div>
  )
}
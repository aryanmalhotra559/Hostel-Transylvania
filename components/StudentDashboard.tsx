"use client"

import { useState, useEffect } from 'react'
import TaskList from './TaskList'
import RequestForm from './RequestForm'
import TaskPopup from './TaskPopup'

export default function StudentDashboard() {
  const [tasks, setTasks] = useState({ pending: [], assigned: [] })
  const [showRequestForm, setShowRequestForm] = useState(false)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setTasks({
          pending: data.slice(0, 5),  // Assuming first 5 tasks are pending
          assigned: data.slice(5, 10), // Next 5 tasks are assigned
        })
      } catch (error) {
        console.error("Error fetching tasks:", error)
      }
    }
    fetchTasks()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowRequestForm(true)}
      >
        + New Request
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TaskList title="Pending Requests" tasks={tasks.pending} />
        <TaskList title="Assigned Requests" tasks={tasks.assigned} />
      </div>
      {showRequestForm && (
        <RequestForm onClose={() => setShowRequestForm(false)} />
      )}
    </div>
  )
}
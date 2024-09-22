// components/TaskPopup.tsx
import { useEffect, useState } from "react"

interface TaskPopupProps {
  task: any; // Define a more specific type if possible
  onClose: () => void;
  isWarden: boolean; // Add the isWarden prop
}

export default function TaskPopup({ task, onClose, isWarden }: TaskPopupProps) {
  const [workers, setWorkers] = useState([])

  useEffect(() => {
    // Fetch available workers
    const fetchWorkers = async () => {
      const response = await fetch('/api/workers')
      const data = await response.json()
      setWorkers(data)
    }
    fetchWorkers()
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">{task.taskType}</h2>
        <p className="mb-2">{task.description}</p>
        <p className="mb-2">Student: {task.student.name}</p>
        <p className="mb-2">Room: {task.student.blockName} - {task.student.roomNumber}</p>
        <p className="mb-2">Preferred Date: {task.preferredDate}</p>
        <p className="mb-2">Preferred Time: {task.preferredTime}</p>

        {/* Conditionally render content based on isWarden */}
        {isWarden ? (
          <>
            <h3 className="font-semibold mt-4 mb-2">Assign Worker</h3>
            <select className="w-full mb-2 p-2 border rounded">
              {workers.map((worker) => (
                <option key={worker.id} value={worker.id}>
                  {worker.name}
                </option>
              ))}
            </select>
          </>
        ) : (
          <p className="mb-2">Assigned Date: {task.assignedDate}</p>
        )}

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
          >
            Close
          </button>
          {isWarden ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Assign
            </button>
          ) : (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Mark as Completed
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
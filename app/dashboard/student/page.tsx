"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import '@/styles/globals.css'; // Import global styles

interface Task {
  _id: string;
  taskName: string;
  taskDescription: string;
  preferredTime: string;
  studentId: string;
  studentName: string;
  studentRoom: string;
}

const StudentDashboard = () => {
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [assignedTasks, setAssignedTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Omit<Task, '_id'>>({
    taskName: '',
    taskDescription: '',
    preferredTime: '',
    studentId: '',
    studentName: '',
    studentRoom: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const resPending = await axios.get<Task[]>('/api/tasks/pending');
        const resAssigned = await axios.get<Task[]>('/api/tasks/assigned');
        setPendingTasks(resPending.data);
        setAssignedTasks(resAssigned.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleSubmitTask = async () => {
    try {
      await axios.post('/api/tasks/create', newTask);
      alert('Task created successfully');
      // Reset the new task state
      setNewTask({
        taskName: '',
        taskDescription: '',
        preferredTime: '',
        studentId: '',
        studentName: '',
        studentRoom: '',
      });
      setError(null); // Reset error on successful submission
    } catch (error) {
      console.error('Error creating task:', error);
      setError('Failed to create task. Please try again.'); // Display an error message
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h1>Student Dashboard</h1>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <form onSubmit={(e) => { e.preventDefault(); handleSubmitTask(); }}>
        <input
          name="taskName"
          value={newTask.taskName}
          onChange={handleChange}
          placeholder="Task Name"
          required
        />
        <textarea
          name="taskDescription"
          value={newTask.taskDescription}
          onChange={handleChange}
          placeholder="Task Description"
          required
        />
        <input
          type="datetime-local"
          name="preferredTime"
          value={newTask.preferredTime}
          onChange={handleChange}
          required
        />
        <input
          name="studentId"
          value={newTask.studentId}
          onChange={handleChange}
          placeholder="Your Student ID"
          required
        />
        <input
          name="studentName"
          value={newTask.studentName}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          name="studentRoom"
          value={newTask.studentRoom}
          onChange={handleChange}
          placeholder="Your Room"
          required
        />
        <button type="submit">Submit Task</button>
      </form>
      <h2>Pending Tasks</h2>
      <ul>
        {pendingTasks.map((task) => (
          <li key={task._id}>
            <h3>{task.taskName}</h3>
            <p>{task.taskDescription}</p>
            <p>Room: {task.studentRoom}</p>
            <p>Preferred Time: {new Date(task.preferredTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <h2>Assigned Tasks</h2>
      <ul>
        {assignedTasks.map((task) => (
          <li key={task._id}>
            <h3>{task.taskName}</h3>
            <p>{task.taskDescription}</p>
            <p>Room: {task.studentRoom}</p>
            <p>Preferred Time: {new Date(task.preferredTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
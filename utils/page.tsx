"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Task {
  _id: string;
  taskName: string;
  taskDescription: string;
  preferredTime: Date;
  studentId: string;
  studentName: string;
  studentRoom: string;
  status: string;
}

export default function Home() {
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [assignedTasks, setAssignedTasks] = useState<Task[]>([]);

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

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-lg font-bold">Welcome to HostelTransylvania</h1>

        <h2 className="text-md font-semibold">Pending Tasks</h2>
        <ul>
          {pendingTasks.map((task) => (
            <li key={task._id}>{task.taskName} - {task.taskDescription}</li>
          ))}
        </ul>

        <h2 className="text-md font-semibold">Assigned Tasks</h2>
        <ul>
          {assignedTasks.map((task) => (
            <li key={task._id}>{task.taskName} - {task.taskDescription}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
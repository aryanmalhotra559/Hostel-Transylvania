import dbConnect from '../../../../utils/dbConnect';
import Task from '@/models/Task';
import Worker from '@/models/Worker';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { taskId, workerId, newTime } = req.body;

    try {
      // Check if worker exists
      const worker = await Worker.findById(workerId);
      if (!worker) {
        return res.status(404).json({ message: 'Worker not found' });
      }

      // Update task
      await Task.findByIdAndUpdate(taskId, { assignedTo: workerId, preferredTime: newTime, status: 'assigned' });
      res.status(200).json({ message: 'Task assigned successfully' });
    } catch (error) {
      console.error('Error assigning task:', error);
      res.status(500).json({ message: 'Error assigning task' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
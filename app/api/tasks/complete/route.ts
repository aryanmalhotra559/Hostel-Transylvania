import dbConnect from '@/utils/dbConnect';
import Task from '@/models/Task';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { taskId } = req.body;

    try {
      await Task.findByIdAndUpdate(taskId, { status: 'completed' });
      res.status(200).json({ message: 'Task marked as completed' });
    } catch (error) {
      res.status(500).json({ message: 'Error marking task as completed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
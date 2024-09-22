import dbConnect from '@/utils/dbConnect';
import Task from '@/models/Task';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { taskId, feedback, rating } = req.body;

    try {
      await Task.findByIdAndUpdate(taskId, { feedback, rating });
      res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting feedback' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
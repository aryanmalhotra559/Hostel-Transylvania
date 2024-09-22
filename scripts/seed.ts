import dbConnect from '@/app/utils/dbConnect'; // Adjust path as necessary
import Task from '../models/Task';
import Worker from '../models/Worker';

const mongoURI = process.env.MONGO_URI; // Use your environment variable

const seedData = async () => {
  await dbConnect(); // Ensure your dbConnect uses mongoURI

  const demoWorkers = [
    { name: 'John Doe', workerId: 'worker1', email: 'john@example.com', password: 'password123' },
    { name: 'Jane Smith', workerId: 'worker2', email: 'jane@example.com', password: 'password456' },
  ];

  const demoTasks = [
    {
      taskName: 'Clean the common room',
      preferredTime: new Date('2024-09-25T02:12'),
      status: 'pending',
      studentId: '1',
      studentName: 'Alice',
      studentRoom: '101',
    },
    {
      taskName: 'Fix the plumbing',
      preferredTime: new Date('2024-09-26T03:15'),
      status: 'pending',
      studentId: '2',
      studentName: 'Bob',
      studentRoom: '102',
    },
  ];

  await Worker.deleteMany({});
  await Task.deleteMany({});

  const workers = await Worker.insertMany(demoWorkers);
  const tasks = await Task.insertMany(demoTasks);

  // Optionally assign tasks to workers
  await Worker.findByIdAndUpdate(workers[0]._id, { assignedTasks: [tasks[0]._id] });
  await Worker.findByIdAndUpdate(workers[1]._id, { assignedTasks: [tasks[1]._id] });

  console.log('Demo data seeded successfully');
  process.exit();
};

seedData().catch((err) => {
  console.error(err);
  process.exit(1);
});
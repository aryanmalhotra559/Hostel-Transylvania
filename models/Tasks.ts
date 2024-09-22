import mongoose, { Schema, Document } from 'mongoose';

export interface Task extends Document {
  taskName: string;
  taskDescription: string;
  preferredTime: Date;
  studentId: string;
  studentName: string;
  studentRoom: string;
  status: string; // e.g., 'pending', 'assigned', 'completed'
}

const TaskSchema: Schema = new Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  preferredTime: { type: Date, required: true },
  studentId: { type: String, required: true },
  studentName: { type: String, required: true },
  studentRoom: { type: String, required: true },
  status: { type: String, default: 'pending' },
});

export default mongoose.models.Task || mongoose.model<Task>('Task', TaskSchema);
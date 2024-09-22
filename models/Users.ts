import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'warden' | 'worker';
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'warden', 'worker'], required: true },
});

export default mongoose.models.User || mongoose.model<User>('User', UserSchema);
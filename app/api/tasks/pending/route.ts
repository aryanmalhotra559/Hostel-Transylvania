import Tasks from '@/models/Tasks';
import { NextResponse } from 'next/server';

// Fetch pending tasks
export async function GET() {
  try {
    const tasks = await Tasks.find({ status: 'pending' });
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json({ success: false, error: 'Error fetching tasks' }, { status: 500 });
  }
}

// You can similarly create a separate route for fetching assigned tasks by changing the query filter:
// Tasks.find({ status: 'assigned' });
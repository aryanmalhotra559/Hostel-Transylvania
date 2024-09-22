import mongoose, { Types } from 'mongoose';


import dbConnect from '@/lib/dbConnect'; // Adjust the path as necessary
import Tasks from '@/models/Tasks'; // Ensure this path is correct
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await dbConnect(); // Ensure the database is connected

  try {
    const data = await req.json();
    console.log('Received data:', data); // Log the entire received data

    const { taskName, taskDescription, preferredTime, studentId, studentName, studentRoom } = data;

    // Validate the data
    if (!taskName || !taskDescription || !preferredTime || !studentId || !studentName || !studentRoom) {
      console.error('Validation error: All fields are required.');
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }

    const newTask = new Tasks({
      taskName,
      taskDescription,
      preferredTime,
      studentId,
      studentName,
      studentRoom,
    });

    await newTask.save();
    return NextResponse.json({ success: true, task: newTask }, { status: 201 });
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json({ success: false, error: 'Error creating task' }, { status: 500 });
  }
}


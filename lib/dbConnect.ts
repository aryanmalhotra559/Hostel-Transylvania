import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'your-local-mongodb-uri';

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

let conn: mongoose.Connection | null = null;
let promise: Promise<mongoose.Connection> | null = null;

async function dbConnect(): Promise<mongoose.Connection> {
  if (conn) {
    return conn; // Return existing connection
  }

  if (!promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 200000,
    };

    promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      conn = mongoose.connection;
      conn.on('error', (err) => console.error('MongoDB connection error:', err));
      conn.once('open', () => console.log('MongoDB connected'));
      return conn; // Return the connection here
    });
  }

  conn = await promise;
  return conn;
}

export default dbConnect;
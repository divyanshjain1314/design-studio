import { MongoClient } from 'mongodb';

// Connection URI
const uri = process.env.DATABASE_URL;

// MongoClient instance
let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to maintain a single MongoDB connection across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new connection for each request
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export the MongoClient connection promise
export default clientPromise;
import clientPromise from '../../lib/Mongo.client'; // Import MongoDB connection utility

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(); // Get the default database
    const collection = db.collection("contact_messages"); // Name of the collection

    try {
      // Get all documents from the 'contact_messages' collection
      const messages = await collection.find({}).toArray();

      // Send success response with messages
      res.status(200).json(messages);
    } catch (err) {
      console.error("Error fetching data from MongoDB:", err);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  } else {
    // Handle non-GET requests
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

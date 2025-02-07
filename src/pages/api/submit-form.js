import Twilio from "twilio"; // Twilio library for WhatsApp
import clientPromise from "../../lib/Mongo.client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, phone, address, message } = req.body;

    try {
      // Connect to MongoDB
      const client = await clientPromise; // Await MongoDB client connection
      const db = client.db(); // Get the default database
      const collection = db.collection("contact_messages"); // Specify the collection

      // Insert the form data into the 'contact_messages' collection
      const result = await collection.insertOne({
        full_name: fullName,
        email,
        phone,
        address,
        message,
        submittedAt: new Date(), // Optionally add a timestamp
      });

      // Prepare the message to be sent on WhatsApp
      const whatsappMessage = `
         New Contact Form Submission:
         Name: ${fullName}
         Email: ${email}
         Phone: ${phone}
         Address: ${address}
         Message: ${message}
         `;

      // Get Twilio credentials from environment variables
      const twilioSid = process.env.TWILIO_SID;
      const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
      const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Replace with your Twilio WhatsApp-enabled number
      const recipientPhoneNumber = "whatsapp:+918305216438"; // Your WhatsApp number (replace with your number)

      // Create Twilio client
      const clientTwilio = Twilio(twilioSid, twilioAuthToken);

      // Send WhatsApp message using Twilio API
      await clientTwilio.messages.create({
        from: twilioPhoneNumber,
        to: recipientPhoneNumber,
        body: whatsappMessage,
      });

      // Send success response
      res.status(201).json({
        message: "Form submitted successfully",
        data: result,
        statuscode: 201,
      });
    } catch (err) {
      console.error("Error inserting data into MongoDB or sending WhatsApp message:", err);
      res.status(500).json({ error: "Failed to submit form" });
    }
  } else {
    // Handle non-POST requests
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

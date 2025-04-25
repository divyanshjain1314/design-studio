"use client";

import moment from "moment";
import Header from "../../pages/Header";
import { useEffect, useState } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/get-messages");
        if (!res.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await res.json();
        if (data.length > 0) {
          const modifyData = data.reverse();
          setMessages(modifyData);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <main>
        <div className="relative h-[55vh] contact-details-banner">
          <div className="absolute bg-[#00000094] top-0 bottom-0 left-0 right-0 z-[10]"></div>

          <div className="absolute top-0 left-0 right-0 w-full px-4">
            <Header contactDetails={true} />
          </div>
        </div>
      </main>
      <section className="px-16 pt-5 py-5">
        <h1>Messages</h1>

        <div className="">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 bg-[#ccc] rounded-tl rounded-bl">
                  Full Name
                </th>
                <th className="border-b p-2 bg-[#ccc]">Email</th>
                <th className="border-b p-2 bg-[#ccc]">Phone</th>
                <th className="border-b p-2 bg-[#ccc]">Address</th>
                <th className="border-b p-2 bg-[#ccc]">Message</th>
                <th className="border-b p-2 bg-[#ccc] rounded-tr rounded-br">
                  Submitted At
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message._id} className="mb-3">
                  <td className="border-b p-2 py-3">{message.full_name}</td>
                  <td className="border-b p-2 py-3">{message.email}</td>
                  <td className="border-b p-2 py-3">{message.phone}</td>
                  <td className="border-b p-2 py-3">{message.address}</td>
                  <td className="border-b p-2 py-3">{message.message}</td>
                  <td className="border-b p-2 py-3">
                    {moment(message.submittedAt).format("DD-MM-YYYY / h:m A")}
                  </td>
                </tr>
              ))}
              {messages.length === 0 && (
                <tr>
                  <td colSpan={10} className="text-center border-b p-3">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

import { db } from "@/utils/db";
import LeagueTable from "@/components/Table";
import Link from "next/link";

export default async function HomePage() {
  const result = await db.query(
    `SELECT * FROM league_message ORDER BY created_at`
  );
  const messages = result.rows;

  function formatDate(date) {
    const dateObject = new Date(date);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "GMT",
      hour12: false,
    };
    return new Intl.DateTimeFormat("en-GB", options).format(dateObject);
  }

  return (
    <div className="container mx-auto p-6">
      {/* League Table */}
      <div className="mb-8">
        <LeagueTable />
      </div>

      {/* Fan Messages Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 underline">
          League Fan Messages
        </h2>
        <div className="text-center mb-6">
          <Link
            href="/fanMessagePosts"
            className="inline-block px-4 py-2 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Post a Fan Message
          </Link>
        </div>

        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className="p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold">{message.name}</h3>
              <p className="text-gray-700 mt-2">{message.message}</p>
              <p className="text-sm text-gray-500 mt-4">
                {formatDate(message.created_at)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

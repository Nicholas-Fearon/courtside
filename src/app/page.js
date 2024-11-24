import { db } from "@/utils/db";
import LeagueTable from "@/components/Table";
import Link from "next/link";

export default async function HomePage() {
  const result = await db.query(
    `SELECT * FROM league_message ORDER BY created_at`
  );
  const messages = result.rows;
  console.log(messages);

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
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      dateObject
    );
    return formattedDate;
  }

  return (
    <>
      <div>
        <LeagueTable />
        <Link href={"/fanMessagePosts"}>Post a Fan Message</Link>
        <h2>League Fan Messages</h2>
        {messages.map((message) => (
          <div key={message.id}>
            <h3>{message.name}</h3>
            <p>{message.message}</p>
            <p>{formatDate(message.created_at)}</p>
            <div></div>
          </div>
        ))}
      </div>
    </>
  );
}

import { db } from "@/utils/db";
import LeagueTable from "@/components/Table";

export default async function HomePage() {
  const result = await db.query(`SELECT * FROM fan_message`);
  const messages = result.rows;
  console.log(messages);
  return (
    <>
      <LeagueTable />
      <h2>Fan Messages</h2>
      {messages.map((message) => (
        <div key={message.id}>
          <h3>{message.name}</h3>
          <p>{message.message}</p>
        </div>
      ))}
    </>
  );
}

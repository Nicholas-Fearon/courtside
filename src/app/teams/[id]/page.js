import { db } from "@/utils/db";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function TeamRoster({ params }) {
  const id = (await params).id;

  // SQL request for players on the team
  const playerResult = await db.query(
    `SELECT 
      players.id AS player_id,
      players.name AS player_name,
      players.position
    FROM players
    WHERE players.team_id = $1`,
    [id]
  );

  const players = playerResult.rows;

  // SQL request for posts specific to this team
  const postResult = await db.query(
    `SELECT * FROM team_msg WHERE team_id = $1 ORDER BY created_at`,
    [id]
  );

  const messages = postResult.rows;

  return (
    <>
      <h2>Team Roster</h2>

      {players.length ? (
        players.map((player) => (
          <Link
            key={player.player_id}
            href={`/teams/${id}/${player.player_id}`}
          >
            <div>
              <h3>{player.player_name}</h3>
            </div>
          </Link>
        ))
      ) : (
        <p>No players found for this team.</p>
      )}

if (!messages) {
        notFound()
    }

      <Link href={`/teamMessagePosts?team_id=${id}`}>Make a New Team Post</Link>

      <h2>Team Messages</h2>
      {messages.length ? (
        messages.map((message) => (
          <div key={message.id}>
            <h3>{message.name}</h3>
            <p>{message.message}</p>
          </div>
        ))
      ) : (
        <p>No messages for this team.</p>
      )}
    </>
  );
}

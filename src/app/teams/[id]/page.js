import { db } from "@/utils/db";
import Link from "next/link";

export default async function TeamRoster({params}) {
    
    const id = (await params).id;
    console.log("single team param: ",id)

    const result = await db.query(`SELECT 
      players.id AS player_id,
      players.name AS player_name,
      players.position
    FROM players
    WHERE players.team_id = $1`,
    [id]);

    const players = result.rows;
   console.log("players sql:",players)
    
    return (<>

        <h2>Team Roster</h2>
        {players.length ? (
          players.map((player) => (
            <Link key={player.player_id} href={`/teams/${id}/${player.player_id}`}>
              <div>
                <h3>{player.player_name}</h3>
                <p>Position: {player.position}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No players found for this team.</p>
        )}
      </>)
}
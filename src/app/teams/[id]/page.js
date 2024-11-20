import { db } from "@/utils/db";
import Link from "next/link";

export default async function TeamRoster({params}) {
    
    const id = (await params).id;
    console.log(id)
    const result = await db.query(`SELECT 
    teams.id AS team_id,
    teams.name AS team_name,
    players.id AS player_id,
    players.name AS player_name,
    players.position,
    players.height,
    players.dob,
    players.birth_place
FROM teams
JOIN players ON players.team_id = teams.id
WHERE teams.id = ${id}`);
    const rosters = result.rows;

    return (<>
    <h2> will return players in specific team</h2>
    {rosters.map((roster) => {
        console.log(roster)
        return (
            <Link key={roster.player_id} href={`/teams/${id}`}>
        <div >
            {roster.player_name}
            </div>
            </Link>
    )
    })}
    </>)
}
import Link from "next/link";
const { db } = require("@/utils/db");

export default async function Teams() {
  const result = await db.query(`SELECT * FROM teams`);
  const teams = result.rows;
console.log(teams)
  return (
    <>
      <h2>Teams</h2>
      <p>Will render all teams here</p>

      {teams.map((team) => {
        return (
            <Link key={team.id} href={`/teams/${team.id}`}>
            <div >
            <p>{team.name}</p>
          </div>
            </Link>
          
        );
      })}
    </>
  );
}

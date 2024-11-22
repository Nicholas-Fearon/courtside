import Link from "next/link";
import Image from "next/image";
const { db } = require("@/utils/db");

export default async function Teams() {
  const result = await db.query(`SELECT * FROM teams ORDER BY id`);
  const teams = result.rows;
  console.log("teams param", teams);
  return (
    <>
      <h2>Teams</h2>

      {teams.map((team) => {
        return (
          <Link key={team.id} href={`/teams/${team.id}`}>
            <div>
              <Image
                src={team.logo}
                alt="team logo"
                height={50}
                width={50}
              />
              <h3>{team.name}</h3>
              <p>{team.location}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

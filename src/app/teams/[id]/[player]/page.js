import { db } from "@/utils/db";

export default async function Player({ params }) {
  const id = (await params).player;
  console.log(id)
 
  const result = await db.query(`SELECT 
   players.name,
   players.position,
   players.height,
   players.dob,
   players.birth_place,
   FROM players 
   where team_id = params.id`)
const player =  result.rowCount;

console.log(player)
  return (
    <>
      <h2>{}</h2>
    </>
  );
}

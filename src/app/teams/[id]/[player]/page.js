import { db } from "@/utils/db";

export default async function Player({ params }) {
  const { player } = params;

  //  using parameterised query again for player ID
  const result = await db.query(
    `SELECT 
      players.name,
      players.position,
      players.height,
      players.dob,
      players.birth_place
    FROM players
    WHERE players.id = $1`, // using the $1 parameterised input for id again
    [player]
  );
  const playerData = result.rows[0];

  if (!playerData) {
    return <p>Player not found.</p>;
  }

  return (
    <>
      <h2>{playerData.name}</h2>
      <p>Position: {playerData.position}</p>
      <p>Height: {playerData.height} cm</p>
      <p>Date of Birth: {new Date(playerData.dob).toLocaleDateString()}</p>
      <p>Birth Place: {playerData.birth_place}</p>
    </>
  );
}

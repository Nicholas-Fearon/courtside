const { db } = require("@/utils/db");
export default async function Players() {
    const result = await db.query(`SELECT * FROM players`);
  const players = result.rows;
    return <>
    <h2>Players</h2>
    <p>Will render all players here</p>
    {players.map((player) => {
      console.log(player)
        return (
          <div key={player.id}>
            <h3>{player.name}</h3>
          </div>
        );
      })}
    </>
}




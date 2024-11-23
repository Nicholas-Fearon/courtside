import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function FormPage({ searchParams }) {
  const teamId = searchParams.team_id; // Access the team_id from the query parameter

  async function handleMessagePost(formData) {
    "use server";

    const name = formData.get("name");
    const message = formData.get("message");

    // Insert the message with the team_id
    await db.query(
      `INSERT INTO team_msg (team_id, name, message) VALUES ($1, $2, $3)`,
      [teamId, name, message]
    );

    redirect(`/teams/${teamId}`); // Redirect to the specific team's page
  }

  return (
    <div>
      <h2>Add Team Message Post</h2>
      <form action={handleMessagePost}>
        <label>Name</label>
        <input name="name" placeholder="Name" required />

        <label>Message</label>
        <input name="message" placeholder="Message" required />

        <button>Add message</button>
      </form>
    </div>
  );
}
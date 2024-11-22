import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function FormPage() {
  async function handleMessagePost(formData) {
    "use server";

    const name = formData.get("name");
    const message = formData.get("message");

    await db.query(`INSERT INTO team_msg (name, message) VALUES ($1, $2)`, [
      name,
      message,
    ]);

    redirect(`/teams/${team.id}`);
  }



  
  return (
    <>
      <div>
        <h2>Add Team Message Post</h2>
        <form action={handleMessagePost}>
          <label>Name</label>
          <input name="name" placeholder="Name" />

          <label>Message</label>
          <input name="message" placeholder="Message" />

          <button>Add message</button>
        </form>
      </div>
    </>
  );
}

import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function FormPage() {
  async function handleAddReport(formData) {
    "use server";

    const name = formData.get("name");
    const message = formData.get("message");

    await db.query(`INSERT INTO league_message (name, message) VALUES ($1, $2)`, [
      name,
      message,
    ]);

    redirect("/");
  }

  return (
    <>
    <div>
      <h2>Add New Fan Message</h2>
      <form action={handleAddReport}>
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

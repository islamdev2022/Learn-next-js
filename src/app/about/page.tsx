"use server"
import { db } from "../../../lib/backend/db/index";
import { eq } from "drizzle-orm";
import { usersTable } from "../../../lib/backend/db/schema";
import Form from "@/components/form";
export default async function Notes() {
const user = await db.select().from(usersTable).where(eq(usersTable.id, 1))
console.log(user);
const users = await db.select().from(usersTable)

//  const newuser = await db.insert(usersTable).values([{name:"fateh",age:20,email:"ar@email.com"}])
 console.log(users); 
  return (
    <div>
      
      <h1>user with id</h1>
      <pre>{JSON.stringify(user,null,2)}</pre>

        <h1>all users</h1>
        <pre>{JSON.stringify(users,null,4)}</pre>
        <Form/>
        {/* <h1>users after insert</h1>
        <pre>{JSON.stringify(newuser,null,4)}</pre> */}
    </div>
  );
}

'use server'
import { db } from "../../../lib/backend/db/index";
import { usersTable } from "../../../lib/backend/db/schema";
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export async function create_user(name:string,age:string,email:string,imgUrl:string){
await db.insert(usersTable).values({
    name:name,
    age:Number(age),
    email:email,
    imgUrl:imgUrl
}).execute();
}


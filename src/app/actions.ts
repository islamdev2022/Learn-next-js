// "use server";

// import { createClient, SupabaseClient } from "@supabase/supabase-js";
// import { revalidatePath } from "next/cache";

// export async function createNote(prevState: any, formData: FormData) {

  
//     const supabase = createClient();

//     try {
//       const { data } = await supabase
//         .from("notes")
//         .insert({ value: formData.get("note") })
//         .select();

//       revalidatePath("/");
//       return { message: `Added note successfully` };
//     } catch (e) {
//       return { message: "Failed to create note" };
    
//   }
// }
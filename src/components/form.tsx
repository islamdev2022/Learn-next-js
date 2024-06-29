"use client"
import { useState,ChangeEvent,FormEvent } from "react";
import { db } from "../../lib/backend/db/index";
import { eq } from "drizzle-orm";
import { usersTable } from "../../lib/backend/db/schema";
interface FormData {
    name: string;
    age: number;
    email: string;
  }
export default async function Form(){
    const [formData, setFormData] = useState<FormData>({
        name: "",
        age: 0,
        email: ""
      });
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
      await db.insert(usersTable).values([{
          name: formData.name,
          age: formData.age,
          email: formData.email
      }])
        
      };
    
    
    return (
      <form  method="post">
        <input type="text" name="name" placeholder="name" value={formData.name}
        onChange={handleChange}/>
        <input type="text" name="age" placeholder="age" value={formData.age}
        onChange={handleChange}/>
        <input type="text" name="email" placeholder="email" value={formData.email}
        onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    );
} 
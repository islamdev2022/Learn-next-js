"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { create_user } from "@/app/about/actions";

interface FormData {
  name: string;
  age: string;
  email: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "age" ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);

   
    // await create_user(formData.name,formData.age.toString(),formData.email);

    // Reset form data if needed
    setFormData({ name: "", age: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="text-black flex flex-col w-fit gap-5">
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit" className="bg-white">Submit</button>
    </form>
  );
}

"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { create_user } from "@/app/about/actions";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

interface FormData {
    name: string;
    age: string;
    email: string;
    imgUrl: string;
}

export async function uploadFile(file: File): Promise<string | null> {
    const { data, error } = await supabase.storage.from('Images Bucket').upload(`file_path/${file.name}`, file)
    if (error) {
        console.error(error)
        return null
    } else {
        const publicUrl = supabase.storage.from('Images Bucket').getPublicUrl(`file_path/${file.name}`)
        return publicUrl.data.publicUrl
    }
}

const Uploadimg: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        age: "",
        email: "",
        imgUrl: ""
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
        if (file) {
            try {
                setStatus('Uploading...');
                const imgUrl = await uploadFile(file);
                if (imgUrl) {
                    formData.imgUrl = imgUrl;
                    await create_user(formData.name, formData.age.toString(), formData.email, formData.imgUrl);
                    setStatus('Upload successful!');
                } else {
                    setStatus('Upload failed. Please try again.');
                }
            } catch (error) {
                setStatus('Upload failed. Please try again.');
                console.error(error);
            }
        } else {
            setStatus('No file selected.');
        }

        // Reset form data if needed
        setFormData({ name: "", age: "", email: "", imgUrl: "" });
    };

    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<string>('');

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    }

    return (
        <>
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
                <input type="file" name="file" id="file" className="my-6" onChange={handleFileChange}></input>
                {status && <p>{status}</p>}
                <button type="submit" className="bg-white">Submit</button>
            </form>
        </>
    );
}

export default Uploadimg;

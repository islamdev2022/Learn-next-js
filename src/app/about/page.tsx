"use server"
import { db } from "../../../lib/backend/db/index";
import { usersTable } from "../../../lib/backend/db/schema";
import Uploadimg from "@/components/uploadimg";
// import { User } from "../../../types/user"; // Make sure to create this type or adjust the import path

export default async function Notes() {
    const users = await db.select().from(usersTable);
    console.log(users);

    return (
        <div className="flex flex-col items-center">
            <Uploadimg />
            <h1>All Users</h1>
            <UsersTable users={users} />
        </div>
    );
}

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    imgUrl: string;
}

interface UsersTableProps {
    users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full  border-collapse">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Age</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.age}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">
                                <img src={user.imgUrl} alt={user.name} className="h-10 w-10 object-cover" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

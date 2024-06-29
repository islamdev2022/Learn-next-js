"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks=[
    {href:"/register",label:"Register"},
    {href:"/login",label:"Login"},
    {href:"/forgot-password",label:"forgot password"},
]
export default function AuthLayout({children,}:{
    children:React.ReactNode;
}){
    const pathname=usePathname()
    
    return(
        <div>
            {navLinks.map((link)=>{
            const isActive = pathname.startsWith(link.href)
            return (
                <Link href={link.href} key={link.href} className={isActive ? "text-blue-900 mx-4 " :"  mx-4" }>{link.label}</Link>
            )
                            
})}
            <main>{children}</main>
        </div>
    )
}
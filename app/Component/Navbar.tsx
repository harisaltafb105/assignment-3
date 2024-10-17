import Link from "next/link"
export default function Navbar(){
    return(
        <div className="bg-slate-900 text-slate-200 flex gap-x-4 ">
            <Link href="/" >Home</Link>
            <Link href="/About" >About</Link>
            <Link href="/Contact">Contactus</Link>


     </div>
    )
}
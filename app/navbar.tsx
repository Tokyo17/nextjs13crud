import Link from "next/link";

export default function Navbar(){
    return(
        <div>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/add">add</Link> </li>
            </ul>
        </div>
    )
}
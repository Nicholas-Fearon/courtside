
import Link from "next/link"

export default function Nav() {
    return (
        <>
        <Link href={"/"}>Home</Link>
        <Link href={"/teams"}>Teams</Link>
        <Link href={"/players"}>Players</Link>
        <Link href={"/posts"}>Post Form</Link>
        
        </>
    )
}
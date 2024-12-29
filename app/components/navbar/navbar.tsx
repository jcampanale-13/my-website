import Link from "next/link"

export const NavBar = () => {
    return(
        <nav className="flex justify-between bg-[#111111] p-4 text-neutral-300">
            <Link href="/" className="hover:underline">
                Home
            </Link>
            <div className="flex gap-4">
                <Link href="/about" className="hover:underline">
                    About Me
                </Link>
                <Link href="/resume" className="hover:underline">
                    Resume
                </Link>
                <Link href="/contact" className="hover:underline">
                    Contact
                </Link>
            </div>
        </nav>
    )
}
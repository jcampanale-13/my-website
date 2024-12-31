import Link from "next/link"

export const NavBar = () => {
    return(
        <nav className="flex justify-between bg-[#111111] p-4 text-neutral-300">
            <Link href="/" className="hover:underline hover:text-white">
                Home
            </Link>
            <div className="flex gap-4">
                <Link href="/projects" className="hover:underline hover:text-white">
                    Projects
                </Link>
                <Link href="/resume" className="hover:underline hover:text-white">
                    Resume
                </Link>
                <Link href="/contact" className="hover:underline hover:text-white">
                    Contact
                </Link>
            </div>
        </nav>
    )
}
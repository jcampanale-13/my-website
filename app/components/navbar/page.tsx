const NavBar = () => {
    return(
        <header className="flex justify-between m-6">
            <a href="/" className="hover:underline">
                Home
            </a>
            <div className="flex gap-4">
                <a href="/about" className="hover:underline">
                    About Me
                </a>
                <a href="/resume" className="hover:underline">
                    Resume
                </a>
                <a href="/contact" className="hover:underline">
                    Contact
                </a>
            </div>
        </header>
    )
}

export default NavBar;
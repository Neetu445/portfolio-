function Navbar(){
    return(
        <nav className='navbar'>
            <h2 className="logo">Neetu Pathak</h2>

            <ul className="nav-links">
                <li onClick={()=> document.getElementById("home").scrollIntoView({behavior: "smooth",})
            }>Home
            </li>

                <li onClick={()=> document.getElementById("about").scrollIntoView({behavior: "smooth",})
            }>About
            </li>

                <li onClick={()=> document.getElementById("skills").scrollIntoView({behavior: "smooth",})
            }>Skills
            </li>

                <li onClick={()=> document.getElementById("projects").scrollIntoView({behavior: "smooth",})
            }>Projects
            </li>

                <li onClick={()=> document.getElementById("contact").scrollIntoView({behavior: "smooth",})
            }>Contact
            </li>

            </ul>
        </nav>
    );
}

export default Navbar;
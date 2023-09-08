import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <img src="Logo.png" alt="Hiroshi Adauto" width="80" />
      <nav>
            <ul className="flex justify-between">
                <Link to={"/"}>
                  <li className="ml-10 text-sm uppercase hover:border-b">home</li>
                </Link>
                <Link to={"/about"}>
                  <li className="ml-10 text-sm uppercase hover:border-b">about</li>
                </Link>
                <Link to={"/"}>
                  <li className="ml-10 text-sm uppercase hover:border-b">skills</li>
                </Link>
                <Link to={"/"}>
                  <li className="ml-10 text-sm uppercase hover:border-b">projects</li>
                </Link>
                <Link to={"/"}>
                  <li className="ml-10 text-sm uppercase hover:border-b">contact</li>
                </Link>
                
            </ul>
        </nav>
      </div>
        
    </header>
  )
}

export default NavBar
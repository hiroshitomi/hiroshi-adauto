import { useState } from "react";
import { Link } from "react-router-dom"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";


const NavBar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <img src="Logo.png" alt="Hiroshi Adauto" width="80" />
      <nav>
            <ul className="hidden md:flex">
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
            <div onClick={handleNav} className="md:hidden cursor-pointer">
              <AiOutlineMenu size={25} />
          </div>
        </nav>
      </div>
      
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <img
                src="Logo.png"
                alt="Hiroshi Adauto"
                width={70}
                height={70}
              />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something together
              </p>
            </div>

            <nav className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link to={"/"}>
                  <li className="py-4 text-sm">home</li>
                </Link>
                <Link to={"/about"}>
                  <li className="py-4 text-sm">about</li>
                </Link>
                <Link to={"/"}>
                  <li className="py-4 text-sm">skills</li>
                </Link>
                <Link to={"/"}>
                  <li className="py-4 text-sm">projects</li>
                </Link>
                <Link to={"/"}>
                  <li className="py-4 text-sm">contact</li>
                </Link>
              </ul>
            </nav>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#42b5f7]">
                Let's connect
              </p>
              <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="https://www.linkedin.com/in/hiroshidautotomioka/" target="_blank">
                    <FaLinkedinIn />
                    </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="https://github.com/hiroshitomi" target="_blank">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </header>
  )
}

export default NavBar
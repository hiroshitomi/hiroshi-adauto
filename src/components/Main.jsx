import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <main className="w-full h-screen text-center">
      <section className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let's build something together
          </p>
          <h1 className="py-2 text-gray-700">
            Hi, I'm <span className="text-[#42b5f7]">Hiroshi</span>
          </h1>
          <h1 className="pb-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            quam. Praesentium, cupiditate iste in ea expedita quo pariatur
            veniam accusamus labore sapiente, accusantium voluptas optio
            doloremque, harum doloribus dolore illo!
          </p>
          <div className="flex justify-between items-center py-4 m-auto max-w-[300px]">
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <a
              href="https://www.linkedin.com/in/hiroshidautotomioka/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <a href="https://github.com/hiroshitomi" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiOutlineMail />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <BsFillPersonLinesFill />
          </div>
        </div>
        </div>
        
      </section>
    </main>
  );
};

export default Main;

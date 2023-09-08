import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#42b5f7]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// I am not a normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic
            aut nulla in placeat, earum fugiat consequuntur quisquam, eaque
            voluptates dolore suscipit! Pariatur dolorum deserunt sint dicta
            quasi minus voluptates!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            laborum quos mollitia esse perspiciatis culpa, totam corrupti aut
            tempora ad atque eveniet non reprehenderit perferendis iusto aperiam
            fuga similique quidem.
          </p>
          <p className="py-2 text-gray-600 hover:underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="assets/about.jpg" alt="about page" />
        </div>
      </div>
    </section>
  );
};

export default About;

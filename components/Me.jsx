import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold glow-text">
          Me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8 bg-gray-900 text-gray-400 rounded-lg">
          <p className="py-4 max-w-2xl mx-auto">
            With 3 years of experience as a full-stack developer, I specialize in creating dynamic, responsive web applications using technologies like React, Vue.js, Tailwind CSS, and Next.js. My journey in development has allowed me to work on various projects, from e-commerce websites to system development, where I strive for both design and functionality.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            I have also gained extensive back-end experience using PHP, Laravel, and Node.js to develop server-side logic and database integration. I&apos;m passionate about delivering high-quality projects and always aim for clean, efficient code.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Currently, I&apos;m expanding my skill set by learning Python and Django, constantly looking for opportunities to grow as a developer. My goal is to integrate my knowledge across the tech stack to create seamless and scalable web experiences.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="" download={true}>
            <div className="group flex items-center justify-center my-8 bg-gray-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:bg-gray-700 duration-300">
              Resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-gray-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:bg-gray-700 duration-300">
              My Portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;

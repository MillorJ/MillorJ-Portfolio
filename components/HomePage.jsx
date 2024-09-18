import React, { useEffect, useRef } from "react";
import mynewme from "../public/assets/mynewme.jpg";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const fullStackText = textRef.current;
    if (fullStackText) {
      const words = ["Full", "Stack", "Developer"];
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < words.length) {
          fullStackText.innerHTML = words.slice(0, currentIndex + 1).join(" ");
          currentIndex += 1;
        } else {
          fullStackText.innerHTML = "";
          currentIndex = 0;
        }
      }, 1000); // Faster interval for quicker appearance
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div id="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
          <Image src={mynewme} alt="me" />
        </div>

        <h1
          className="uppercase font-bold text-gray-100 text-7xl glow-text"
          ref={textRef}
        >
          {/* The glowing text will be managed by JavaScript */}
        </h1>

        <p className="text-gray-300 text-xl max-w-sm mx-auto">
          I have 3 years of experience in full-stack development, specializing in building and designing dynamic web applications. I currently enjoy working with technologies like React.js, Vue.js, Tailwind CSS, Next.js, Laravel, Node.js, and PHP, while also learning Python and Django to further enhance my skills.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-gray-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:bg-gray-700 duration-300">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

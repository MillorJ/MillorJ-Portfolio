import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setPageScroll(true);
      } else {
        setPageScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "portfolio" },
    { id: 3, link: "experience" },
    { id: 4, link: "me" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className={`w-full h-20 z-10 fixed text-black duration-300 ease-in ${pageScroll ? "bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white" : "bg-transparent"}`}>
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          {/* Thunder transition effect from M to J */}
          <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider cursor-pointer thunder-effect">
            <span className="thunder-glow">M</span>illor
            <span className="thunder-glow">J</span>
          </h1>
        </Link>

        <div>
          {!navigation && (
            <ul className="hidden md:flex">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out text-glow tracking-wider">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          )}

          {!navigation && (
            <div className="md:hidden cursor-pointer text-white" onClick={() => setNavigation(true)}>
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={navigation ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur" : "hidden"}>
        <div className={navigation ? "fixed left-0 top-0 w-full h-full bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white p-10 ease-in duration-500" : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"}>
          <div className="flex w-full items-center justify-between">
            <Link href="/#home">
              <h2 onClick={() => setNavigation(false)} className="text-3xl font-bold uppercase tracking-wider cursor-pointer text-white">
                MillorJ
              </h2>
            </Link>

            <div onClick={() => setNavigation(false)} className="p-3 cursor-pointer text-white">
              <FaTimes size={30} />
            </div>
          </div>

          <div className="mt-16 flex flex-col h-fit gap-10">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li onClick={() => setNavigation(false)} className="py-6 text-2xl tracking-wider cursor-pointer text-glow">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="mt-10">
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <a href="https://www.linkedin.com/in/millorj/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaLinkedin size={25} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaTwitter size={25} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaFacebook size={25} />
                </a>
                <a href="https://github.com/MillorJ" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

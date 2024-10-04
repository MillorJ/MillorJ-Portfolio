import Image from "next/image";
import React from "react";
import workspace from "../public/assets/workspace.jpg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold glow-text">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-gray-900 mt-8 rounded-lg p-6 md:p-8">
          {/* Left Section with Image */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={workspace}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-4 pb-8 text-gray-400 text-left">
              I am open to talk regarding freelancing or full-time opportunities. Feel free to contact me using your preferred medium.
            </p>

            <div className="grid grid-cols-2 gap-6 mx-auto w-4/5">
              <a href="https://www.linkedin.com/in/millorj/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 transition-transform duration-300 p-3 cursor-pointer text-blue-500">
                <FaLinkedin size={25} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 transition-transform duration-300 p-3 cursor-pointer text-blue-500">
                <FaTwitter size={25} />
              </a>
              <a href="https://www.facebook.com/johnrey.millor" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 transition-transform duration-300 p-3 cursor-pointer text-blue-500">
                <FaFacebook size={25} />
              </a>
              <a href="https://github.com/MillorJ" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 transition-transform duration-300 p-3 cursor-pointer text-blue-500">
                <FaGithub size={25} />
              </a>
            </div>
          </div>

          {/* Right Section with Form */}
          <div className="w-full md:w-1/2 h-full rounded-xl bg-gray-800 p-4 md:p-8">
            <div className="p-4 text-left">
              <form action="https://getform.io/f/bmdpenka" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col items-center">
                    <label className="capitalize text-sm py-2 text-gray-400 font-light">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 border-blue-200 rounded-lg p-3 bg-gray-800 text-gray-300 focus:outline-none w-full md:w-4/5"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <label className="capitalize text-sm py-2 text-gray-400 font-light">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 border-blue-200 rounded-lg p-3 bg-gray-800 text-gray-300 focus:outline-none w-full md:w-4/5"
                    />
                  </div>
                  <div className="flex flex-col col-span-2 items-center">
                    <label className="capitalize text-sm py-2 text-gray-400 font-light">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 border-blue-200 rounded-lg p-3 bg-gray-800 text-gray-300 focus:outline-none w-full md:w-4/5"
                    />
                  </div>
                  <div className="flex flex-col col-span-2 items-center">
                    <label className="capitalize text-sm py-2 text-gray-400 font-light">Message</label>
                    <textarea
                      name="message"
                      rows="6"
                      className="border-2 border-blue-200 rounded-lg p-3 bg-gray-800 text-gray-300 focus:outline-none w-full md:w-4/5"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-8">
                  <button className="bg-gray-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:bg-gray-700 duration-300 flex items-center">
                    Send Message
                    <span className="ml-2">
                      <MdExpandMore size={25} />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { MdExpandMore } from "react-icons/md";
import localeats from "../public/assets/portfolio/localeats.png";
import valorant from "../public/assets/portfolio/valorant.png";
import ecommerce from "../public/assets/portfolio/ecommerce.png";
import truckbooking from "../public/assets/portfolio/truckbooking.png";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Truck-Booking",
      imageSrc: truckbooking,
    },
    {
      id: 2,
      title: "Local-Eats",
      imageSrc: localeats,
    },
    {
      id: 3,
      title: "E-Commerce",
      imageSrc: ecommerce,
    },
    {
      id: 4,
      title: "Valorant Clone",
      imageSrc: valorant,
    },
  ];

  return (
    <div id="portfolio" className="w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-gray-100 font-bold glow-text">
          Portfolio
        </h2>
        <p className="py-4 max-w-lg text-gray-300">
          Explore my portfolio showcasing a range of projects that highlight my expertise in web development. From dynamic web applications to engaging user interfaces, each project reflects my passion for coding and design. Dive into the details of each project to see how I solve real-world problems and create innovative solutions.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc }) => (
            <div key={id} className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md transition-transform duration-300 transform hover:scale-105">
              <Image
                src={imageSrc}
                alt={title}
                className="rounded-md duration-200 hover:scale-110"
              />
              <h2 className="text-center text-base capitalize my-4 font-light text-gray-100 duration-200 group-hover:underline underline-offset-4 glow-text">
                {title}
              </h2>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div className="group flex items-center justify-center my-8 bg-gray-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-not-allowed hover:bg-gray-700 transition-colors duration-300">
            All Projects
            <span className="ml-2 -rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

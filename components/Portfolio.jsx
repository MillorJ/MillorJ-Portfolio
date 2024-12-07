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
      repoLink: "https://github.com/MillorJ/Truck-Booking-Website",
    },
    {
      id: 2,
      title: "Local-Eats",
      imageSrc: localeats,
      repoLink: "https://github.com/MillorJ/Local-Eats---Discover-Cebu-s-Best-Restaurants",
    },
    {
      id: 3,
      title: "E-Commerce",
      imageSrc: ecommerce,
      repoLink: "https://github.com/MillorJ/E-commerce-Website",
    },
    {
      id: 4,
      title: "Valorant Clone",
      imageSrc: valorant,
      repoLink: "https://github.com/MillorJ/Valorant-",
    },
  ];

  return (
    <div id="portfolio" className="w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-gray-100 font-bold glow-text">
          Portfolio
        </h2>
        <p className="py-4 max-w-lg text-gray-300">
          This portfolio showcases my personal web development projects, designed to hone my skills
          and creativity. Each project reflects my passion for coding and building functional,
          visually appealing applications. While these aren&apos;t client-based projects, they
          represent my commitment to continuous learning and experimentation. Feel free to explore
          each project and check out the associated GitHub repositories for a deeper dive into my
          work. I look forward to updating this portfolio with more exciting projects soon!
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, repoLink }) => (
            <a
              key={id}
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={imageSrc}
                alt={title}
                className="rounded-md duration-200 hover:scale-110"
              />
              <h2 className="text-center text-base capitalize my-4 font-light text-gray-100 duration-200 group-hover:underline underline-offset-4 glow-text">
                {title}
              </h2>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <a
            href="https://github.com/MillorJ"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center my-8 bg-gray-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider hover:bg-gray-700 transition-colors duration-300"
          >
            All Projects
            <span className="ml-2 -rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

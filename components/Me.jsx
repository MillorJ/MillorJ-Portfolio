import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
      <div
        className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 text-center md:text-left flex flex-col justify-center"
        style={{ minHeight: "80vh" }}
      >
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold glow-text">
          Me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-4 sm:px-8 bg-gray-900 text-gray-400 rounded-lg">
          <strong>Lead Full Stack Software Engineer | Rocket Real Estate Solution</strong>
          <br />
          <em>Feb 2025 - Present · 1 mo</em>
          <br />
          <p className="my-4">
            - Blockchain development
            <br />
            - Design responsive and intuitive Next.js UIs for seamless payment experiences.
            <br />
            - Build robust RESTful APIs and WebSocket services using Golang.
          </p>

          <strong>Full Stack Software Engineer | Rocket Real Estate Solution</strong>
          <br />
          <em>Jan 2025 - Present · 2 mos</em>
          <br />
          <p className="my-4">
            - Blockchain development
            <br />
            - Design responsive and intuitive Next.js UIs for seamless payment experiences.
            <br />
            - Build robust RESTful APIs and WebSocket services using Golang.
          </p>

          <strong>Full Stack Software Engineer | AiBuildiQ (US Company)</strong>
          <br />
          <em>Dates: Present</em>
          <br />
          <p className="my-4">
            - Developed new websites for AiBuildiQ.
            <br />
            - Spearheaded the development and deployment of full-stack solutions to streamline business operations, leveraging modern technologies to improve scalability and performance.
            <br />
            - Designed and implemented a broker-centric framework, integrating Gemini and Google product APIs to enhance operational efficiency and user experience.
            <br />
            - Developed and maintained responsive front-end interfaces using Next.js, ensuring high-quality, user-friendly web applications.
            <br />
            - Implemented a robust FastAPI backend to power the brokers' dashboard, providing efficient data handling and seamless API integrations.
            <br />
            - Collaborated cross-functionally with stakeholders and team members to align technical efforts with company goals and deliver seamless digital solutions.
            <br />
          </p>

          <strong>Full Stack Developer | Freelancer.com</strong>
          <br />
          <em>Dates: 5 months</em>
          <br />
          <p className="my-4">
            - Developed dynamic, responsive web applications using React, Vue.js, Tailwind CSS, and
            Next.js.
            <br />
            - Delivered quality projects for various international clients, ensuring seamless design
            and functionality.
            <br />
            - Worked with back-end technologies such as PHP, Laravel, and Node.js to create scalable
            web applications.
          </p>

          <strong>CEO & Founder | NovaX Tech Solutions</strong>
          <br />
          <em>Dates: Present</em>
          <br />
          <p className="my-4">
            - Full Stack Developer and Project Manager.
            <br />
            - Create and execute long-term strategic goals.
            <br />
            - Build and maintain a strong executive team.
            <br />
            - Team Leadership.
            <br />
            - Decision Making.
            <br />
          </p>

          <strong>Full Stack Developer (Freelance - US Client)</strong>
          <br />
          <em>Dates: 6 months</em>
          <br />
          <p className="my-4">
            - Provided full-stack development services to US-based clients, successfully completing
            4 projects with positive testimonials.
            <br />
            - Specialized in front-end technologies (React, Vue.js, Tailwind CSS) and back-end
            systems (PHP, Laravel, Node.js) to deliver efficient solutions.
            <br />
            - Built a variety of projects, including:
            <br /> - E-commerce website
            <br /> - Client portfolio
            <br /> - Company portfolio
            <br /> - Real estate website
          </p>

          <strong>Web Developer | Today&apos;s Carolinian</strong>
          <br />
          <em>Dates: Present</em>
          <br />
          <p className="py-4 max-w-lg text-gray-300">
            This portfolio showcases my personal web development projects, designed to hone my
            skills and creativity. Each project reflects my passion for coding and building
            functional, visually appealing applications. While these aren&apos;t client-based
            projects, they represent my commitment to continuous learning and experimentation. Feel
            free to explore each project and check out the associated GitHub repositories for a
            deeper dive into my work. I look forward to updating this portfolio with more exciting
            projects soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;

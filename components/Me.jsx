import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 text-center md:text-left flex flex-col justify-center" style={{ minHeight: '80vh' }}>
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold glow-text">
          Me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-4 sm:px-8 bg-gray-900 text-gray-400 rounded-lg">
          <strong>Full Stack Software Engineer | AiBuildiQ (US Company)</strong><br />
          <em>Dates: Present</em><br />
          <p className="my-4">
            - Working as a Full Stack Software Engineer to develop and maintain scalable web applications.<br />
            - Leveraging modern frameworks such as React, Next.js, and Tailwind CSS for front-end development.<br />
            - Building robust back-end solutions using Node.js and Python, along with integrating various APIs for enhanced functionality.<br />
            - Implementing back-end frameworks such as Django and Flask to build scalable and efficient systems.<br />
            - Collaborating with cross-functional teams to deliver high-quality software solutions.<br />
          </p>

          <strong>Full Stack Developer | Freelancer.com</strong><br />
          <em>Dates: 5 months</em><br />
          <p className="my-4">
            - Developed dynamic, responsive web applications using React, Vue.js, Tailwind CSS, and Next.js.<br />
            - Delivered quality projects for various international clients, ensuring seamless design and functionality.<br />
            - Worked with back-end technologies such as PHP, Laravel, and Node.js to create scalable web applications.
          </p>
          
          <strong>CEO & Founder | NovaX Tech Solutions</strong><br />
          <em>Dates: Present</em><br />
          <p className="my-4">
            - Will work also as a Full Stack Developer and Project Manager <br />
            - Create and execute long-term strategic goals<br />
            - Build and maintain a strong executive team.<br />
            - Team Leadership <br />
            - Decision Making <br />
          </p>

          <strong>Full Stack Developer (Freelance - US Client)</strong><br />
          <em>Dates: 6 months</em><br />
          <p className="my-4">
            - Provided full-stack development services to US-based client, successfully completing 4 projects with positive testimonials.<br />
            - Specialized in front-end technologies (React, Vue.js, Tailwind CSS) and back-end systems (PHP, Laravel, Node.js) to deliver efficient solutions.<br />
            - Built a variety of projects, including:<br />
            - E-commerce website<br />
            - Client portfolio<br />
            - Company portfolio<br />
            - Real estate website
          </p>

          <strong>Web Developer | Today&#39;s Carolinian</strong><br />
          <em>Dates: Present</em><br />
          <p className="my-4">
            - Contributed to the development and maintenance of the Today&#39;s Carolinian project website, improving functionality and user experience.<br />
            - Worked with modern frameworks like React and Tailwind CSS to enhance the website&#39;s performance and design.
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

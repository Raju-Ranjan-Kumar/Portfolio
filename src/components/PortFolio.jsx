import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.jpg";
import javascript from "../assets/javascript.png";
import react from "../assets/reactjs.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.jpg";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html5",
      course: "Master Modern HTML5 for Web Development"
    },
    {
      id: 2,
      logo: css,
      name: "CSS3",
      course: "Learn CSS3: Styling the Web with Ease"
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      course: "JavaScript Essentials: From Basics to Advanced"
    },
    {
      id: 4,
      logo: react,
      name: "React",
      course: "Build Interactive & Scalable UIs with React.js"
    },
    {
      id: 5,
      logo: node,
      name: "Node",
      course: "Server-Side JavaScript with Node.js"
    },
    {
      id: 6,
      logo: express,
      name: "Express",
      course: "Fast & Scalable APIs with Express.js"
    },
    {
      id: 7,
      logo: mongodb,
      name: "Mongo DB",
      course: "Master NoSQL Databases with MongoDB"
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
          {cardItem.map(({ id, logo, name, course }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {course}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                  href="https://www.youtube.com/@rajuranjankumar1869"
                  target="_blank"
                >
                  Video
                </a>
                <a
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  href="https://github.com/Raju-Ranjan-Kumar"
                  target="_blank"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;

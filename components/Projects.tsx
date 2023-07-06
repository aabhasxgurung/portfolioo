import React from "react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const projects = [
  {
    name: "TicTacToe",
    description: "It is a simple tic-tac-toe made using ",
    image: "/images/TicTacToe.png",
    github: "https://github.com/aabhasxgurung/JS/tree/master/TicTacToe",
    link: "https://github.com/aabhasxgurung/JS/tree/master/TicTacToe",
  },
  {
    name: "ToDo App",
    description: "It is a web application for todo tasks",
    image: "/images/Todo.png",
    github: "https://github.com/aabhasxgurung/JS/tree/master/Todo",
    link: "https://github.com/aabhasxgurung/JS/tree/master/Todo",
  },
  {
    name: "Veda Studios",
    description: "Its a web application developed for veda studios",
    image: "/images/veda.png",
    github: "https://github.com/aabhasxgurung/veda-Assignment",
    link: "https://veda-assignment.vercel.app/",
  },
  {
    name: "Aabhas Ko Hotel",
    description: "It is a hotel booking website",
    image: "/images/hotel.png",
    github: "https://github.com/aabhasxgurung/portfolio",
    link: "https://aabhaskobooking-4lhi8xjzx-aabhasxgurung.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description: "It is a clone of Netflix",
    image: "/images/netflix.png",
    github: "https://github.com/aabhasxgurung/netflix",
    link: "https://netflix-mauve-nu.vercel.app/auth",
  },
];
const Projects = (props: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FA7B0A]">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Link href={project.link}>
              <Image src={project.image} alt="" width={500} height={350} />
            </Link>
            <div id="project" className="space-y-10 px-0 md:px-10 max-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project.name}
              </h4>
              <p className="w-[300px] md:w-[500px] text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;

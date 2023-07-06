import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

const skills = [
  {
    name: "HTML",
    image: "/images/html.png",
  },
  {
    name: "CSS",
    image: "/images/css.png",
  },
  {
    name: "JavaScript",
    image: "/images/js.png",
  },
  {
    name: "React.js",
    image: "/images/react.png",
  },
  {
    name: "Tailwind.css",
    image: "/images/tailwind.png",
  },
  {
    name: "Next.js",
    image: "/images/next.png",
  },
  {
    name: "Git",
    image: "/images/git.png",
  },
  {
    name: "GitHub",
    image: "/images/github.png",
  },
  {
    name: "Typescript",
    image: "/images/ts.png",
  },
  {
    name: "Python",
    image: "/images/py.png",
  },
  {
    name: "MySQL",
    image: "/images/sql.png",
  },
  {
    name: "Node",
    image: "/images/node.png",
  },
  {
    name: "MongoDB",
    image: "/images/mongodb.png",
  },
];

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {skills.map((skill, idx) => (
        <div key={idx} className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.2 }}
            src={skill.image}
            className="rounded-full border border-gray-500 object-fit p-3 w-24 h-24 xl:w-32 xl:h-32 filter "
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-50">
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-black opacity-100">
                {skill.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;

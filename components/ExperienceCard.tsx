import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10  cursor-pointer transition-opacity duration-300 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 xl:w-[300px] xl:h-[200px] object-cover object-center"
        src="/images/workplace.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Junior Developer</h4>
        <p className="font-bold text-2xl mt-1">Veda Studios</p>
        <div className="flex space-x-2 my-2 h-10 w-10">
          <img className="h-10 w-10 object-cover" src="/images/js.png" alt="" />
          <img className="h-10 w-10" src="/images/react.png" alt="" />
          <img src="/images/ts.png" alt="" />
          <img src="/images/next.png" alt="" />
        </div>
        <p className="uppercase py-5">May 29 2023 - Present</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Assignment</li>
          <li>Web Development</li>
          <li>Game Development</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

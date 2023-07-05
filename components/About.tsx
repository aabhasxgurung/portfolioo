import React from "react";

import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        src="/images/dev.gif"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover md:w-64 md:h-94 xl:w-[500px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          My{" "}
          <span className="underline decoration-[#F7AB0A]/50">background</span>
        </h4>
        <p className="text-md">
          Hi, my name is Aabhas and I am a highly ambitious, self-motivated, and
          driven fontend developer based in Kathmandu, Nepal I graduated from
          Islington College, Kamalpokhari in 2023 with a BS in frontend
          developer and have been working in the field ever since. I have a wide
          range of hobbies and passions that keep me busy. From playing
          basketball, painting to travelling I am always seeking new experiences
          and love to keep myself engaged and learning new things. I believe
          that you should never stop growing and that's what I strive to do, I
          have a passion for technology and a desire to always push the limits
          of what is possible. I am excited to see where my career takes me and
          am always open to new opportunities.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

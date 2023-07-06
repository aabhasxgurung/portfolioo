import React from "react";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer space-x-2"
      >
        <SocialIcon url="https://www.instagram.com/" />
        <SocialIcon url="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den" />
        <SocialIcon url="https://www.facebook.com/" />
        <SocialIcon url="https://www.linkedin.com/in/aabhas-gurung-12a7a5281/" />
        <SocialIcon url="https://github.com/" />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer space-x-2"
      >
        <SocialIcon className=" cursor-pointer" network="email" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}

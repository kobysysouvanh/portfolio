"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";



export default function Header() {
  return (
    <header className="flex justify-between items-start p-5 sticky top-0 max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <p className="uppercase text-sm text-[#31BAFE] hidden md:inline-block">
          Socials
        </p>
        <SocialIcon
          url="https://github.com/kobysysouvanh"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/kobysysouvanh/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
      <motion.div
        onClick={() => (window.location.href = "#contact")}
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <div className="cursor-pointer">
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase text-sm text-[#31BAFE] hidden md:inline-block">
            Email me
          </p>
        </div>
      </motion.div>
    </header>
  );
}

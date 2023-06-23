"use client";

import React from "react";
import { motion } from "framer-motion";



export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#31BAFE] text-2x">
        About
      </h3>

      <div className="space-y-10 px-0">
        <h4 className="text-4xl font-semibold">Hello,</h4>
        <p className="text-lg">
          My name is <span className="text-[#31BAFE]">Koby Sysouvanh</span>. I
          am a graduate from{" "}
          <span className="text-[#31BAFE]">Kennesaw State University</span>{" "}
          where I have obtained my{" "}
          <span className="text-[#31BAFE]">Bachelors of Science Degree</span> in
          <span className="text-[#31BAFE]"> Computer Science</span> with a{" "}
          <span className="text-[#31BAFE]">Minor</span> in{" "}
          <span className="text-[#31BAFE]">Software Engineering</span>. I am
          constantly learning and developing new skills to become as versatile
          as I can possibly be. With my passion for coding and developing new
          solutions, I am confident within my abilities to contribute success in
          the given role.
        </p>
      </div>
    </motion.div>
  );
}

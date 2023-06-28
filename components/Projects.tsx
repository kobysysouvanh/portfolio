"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Airbnb Clone",
      desc: "Airbnb clone created using multiple tech stacks including React, Next.js, Primsa, MongoDB, NextAuth, Tailwind CSS, and more. Key features of this project includes full responsiveness, authentications including credential and google, listing of properties, search bar filtering, booking/reservation system, pricing calculation, and cancellation of reservations. ",
      img: "/airbnb.png",
      github: "https://github.com/kobysysouvanh/airbnb-clone",
      website: "https://airbnb-clone-lemon-zeta.vercel.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col h-screen relative mx-auto overflow-hidden text-left z-0 md:flex-row max-w-full justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#31BAFE] text-2xl">
        Projects
      </h3>

      <div className="flex relative w-full top-20 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#31BAFE]/80">
        {projects.map((project) => (
          <div key={project.name} className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 ">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              className="w-70 h-40"
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.img}
              alt=""
            />

            <div className="space-y-10 px-0 max-w-6xl md:px-10">
              <h4 className="text-4xl font-semibold text-center">
                {project.name}
              </h4>

              <p className="text-lg text-center md:text-left">{project.desc}</p>
            </div>
            <div className="space-x-2 flex items-center justify-center">
              <a
                href={project.github}
                target="_blank"
                className="rounded-full bg-[#31BAFE]/70 flex items-center justify-center w-20 h-12"
              >
                Github
              </a>
              <a
                href={project.website}
                target="_blank"
                className="rounded-full bg-[#31BAFE]/70 flex items-center justify-center w-20 h-12"
              >
                Website
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#31BAFE]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

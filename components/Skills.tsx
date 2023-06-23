"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {
  return (
    <motion.div
      className="min-h-screen flex flex-col relative overflow-hidden justify-center items-center text-center mx-auto max-w-[2000px] md:text-left xl:flex-row xl:px-10 xl:space-y-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#31BAFE] text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill
          directionLeft={true}
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        />
        <Skill
          directionLeft={true}
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-plain-wordmark.svg"
        />
        <Skill
          directionLeft={true}
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        />
        <Skill
          directionLeft={true}
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain-wordmark.svg"
        />
        <Skill
          directionLeft={true}
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        />
        <Skill
          directionLeft={true}
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
        />
        <Skill
          directionLeft={true}
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
        />
        <Skill
          directionLeft={true}
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
        />
        <Skill
          directionLeft={true}
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
        />
        <Skill url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
        <Skill url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
        <Skill url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        <Skill url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
        <Skill url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
        <Skill url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
        <Skill url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        <Skill url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
        <Skill url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
      </div>
    </motion.div>
  );
}

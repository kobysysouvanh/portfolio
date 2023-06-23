"use client";

import React from "react";
import { motion } from "framer-motion";



export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col h-screen relative overflow-hidden text-lft md:flex-row max-w-full px-10 justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#31BAFE] text-2xl">
        Experience
      </h3>
      <div className="space-y-10 px-0">
        <h4 className="text-4xl font-semibold">
          To be filled with Professional Experience
        </h4>
      </div>
    </motion.div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

type SkillProps = {
  directionLeft?: boolean;
  url: string;
};

export default function Skill({ directionLeft, url }: SkillProps) {
  return (
    <div className="relative flex">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ delay: 0.2, duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={url}
        className="rounded-xl w-24 h-24"
      />
    </div>
  );
}

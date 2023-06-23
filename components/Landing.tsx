"use client";

import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import profilePic from "../public/profile.jpg";
import BackgroundCircles from "./BackgroundCircles";

export default function Landing() {
  const [text, count] = useTypewriter({
    words: ["My Name is Koby Sysouvanh", "This is My Portfolio"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src={profilePic}
        alt="avatar"
        width={124}
        height={124}
        unoptimized={true}
        quality={100}
      />

      <div className="z-20">
        <h2 className="text-[#909090] font-semibold pb-2 text-sm uppercase tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#31BAFE" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="landingButton">About</button>
          </a>
          <a href="#experience">
            <button className="landingButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="landingButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="landingButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

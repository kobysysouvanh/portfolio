"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

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
      <div className="relative  w-full items-center justify-center">
        <div className="p-3 flex items-center gap-7">
          <div className="flex flex-col rounded-xl border border-[#31BAFE]/20 overflow-hidden">
            <div className="bg-white flex items-center justify-center h-full w-full">
              <Image src="/airbnb.png" width={700} height={100} alt="airbnb" />
            </div>
            <h3 className="text-2xl font-bold pl-2 pt-2">Airbnb Clone</h3>
            <div className="p-2">{projects[0].desc}</div>
            <div className="w-full flex gap-2 py-2 justify-center items-center">
              <SocialIcon
                url="https://github.com/kobysysouvanh"
                fgColor="white"
                bgColor="black"
                target="_blank"
              />
              <SocialIcon
                url="https://airbnb-clone-b27181208-kobysysouvanh.vercel.app/"
                fgColor="white"
                bgColor="black"
                target="_blank"
              />
            </div>
          </div>
          <div className="flex flex-col rounded-xl border border-[#31BAFE]/20 overflow-hidden">
            <div className="bg-white flex items-center justify-center h-full w-full">
              <Image
                src="/pcpalace.png"
                width={700}
                height={100}
                alt="airbnb"
              />
            </div>
            <h3 className="text-2xl font-bold pl-2 pt-2">PC Palace</h3>
            <div className="p-2">
              Created using Next.js, Prisma, Planetscale, Tailwind CSS. A basic
              e-commerce website where users can buy and sell products. Comes
              with a fully functioning shopping cart and checkout is completed
              using Stripe. Products can be individually viewed to show more
              information about the product. Admins can add/remove/edit products
              for buyers to view. Deployed on Vercel.
            </div>
            <div className="w-full flex gap-2 py-2 justify-center items-center">
              <SocialIcon
                url="https://github.com/kobysysouvanh"
                fgColor="white"
                bgColor="black"
                target="_blank"
              />
              <SocialIcon
                url="https://airbnb-clone-b27181208-kobysysouvanh.vercel.app/"
                fgColor="white"
                bgColor="black"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#31BAFE]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

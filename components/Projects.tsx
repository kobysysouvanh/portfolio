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
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#31BAFE] text-2xl">
        Projects
      </h3>
      <div className="relative w-full h-full flex items-center justify-center z-[10]">
        <div className="p-3 h-[54vh] items-center gap-7 grid grid-cols-4">
          <div className="flex h-full flex-col rounded-xl border border-[#31BAFE]/20 overflow-hidden bg-[#31BAFE]/50">
            <div className="flex items-center justify-center w-full h-full bg-white">
              <Image src="/airbnb.png" width={700} height={100} alt="airbnb" />
            </div>
            <div className="h-96">
              <h3 className="pt-2 pl-2 text-2xl font-bold">Airbnb Clone</h3>
              <div className="p-2">{projects[0].desc}</div>
            </div>
            <div className="flex items-center justify-center w-full gap-2 py-2">
              <SocialIcon
                url="https://github.com/kobysysouvanh/airbnb-clone"
                fgColor="white"
                bgColor="black"
                target="_blank"
              />
              <SocialIcon
                url="https://airbnb-clone-b27181208-kobysysouvanh.vercel.app/"
                fgColor="white"
                bgColor="black"
                target="https://airbnb-clone-b27181208-kobysysouvanh.vercel.app/"
              />
            </div>
          </div>
          <div className="flex h-full flex-col rounded-xl border border-[#31BAFE]/20 overflow-hidden bg-[#31BAFE]/50">
            <div className="flex items-center justify-center w-full h-full bg-white">
              <Image src="/pcpalace.png" width={700} height={100} alt="logo" />
            </div>
            <div className="h-96">
              <h3 className="pt-2 pl-2 text-2xl font-bold">PC Palace</h3>
              <div className="p-2">
                Created using Next.js, Prisma, Planetscale, Tailwind CSS. A
                basic e-commerce website where users can buy and sell products.
                Comes with a fully functioning shopping cart and checkout is
                completed using Stripe. Products can be individually viewed to
                show more information about the product. Admins can
                add/remove/edit products for buyers to view. Deployed on Vercel.
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-2 py-2">
              <SocialIcon
                url="https://github.com/kobysysouvanh/pcpalace"
                fgColor="white"
                bgColor="black"
                target="_blank"
              />
              <SocialIcon
                url="https://pcpalace.vercel.app/"
                fgColor="white"
                bgColor="black"
                target="https://pcpalace.vercel.app/"
              />
            </div>
          </div>
          <div className="flex h-full flex-col rounded-xl border border-[#31BAFE]/20 overflow-hidden bg-[#31BAFE]/50">
            <div className="flex items-center justify-center w-full h-full bg-zinc-900">
              <Image
                src="/cloneflix.png"
                width={700}
                height={100}
                alt="airbnb"
              />
            </div>
            <div className="h-96">
              <h3 className="pt-2 pl-2 text-2xl font-bold">Cloneflix</h3>
              <div className="p-2">
                Application created using Next.js, MongoDB, NextAuth and
                Tailwind CSS. Displays a variety of movie titles and tv series
                where users can interact with to either add to their list or
                visit an individual more descriptive page. Includes a search
                functionality where information about a certain title can be
                retrieved.
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-2 py-2">
              <SocialIcon
                url="https://github.com/kobysysouvanh/cloneflix"
                fgColor="white"
                bgColor="black"
                target="_blank"
              />
              <SocialIcon
                url="https://cloneflix-alpha.vercel.app/"
                fgColor="white"
                bgColor="black"
                target="https://cloneflix-alpha.vercel.app/"
              />
            </div>
          </div>
          <div className="flex h-full flex-col rounded-xl border border-[#31BAFE]/20 overflow-hidden bg-[#31BAFE]/50">
            <div className="relative flex items-center justify-center w-full h-full bg-zinc-900">
              <Image src="/txt.png" fill alt="txt.io"/>
            </div>
            <div className="h-96">
              <h3 className="pt-2 pl-2 text-2xl font-bold">txt.io</h3>
              <div className="p-2">
                Application created using Next.js, TypeScript, MongoDB, and Pusher. Real-time message application. Includes many features such as direct messaging, group chats, authentication, image uploading, and more.
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-2 py-2">
              <SocialIcon
                url="https://github.com/kobysysouvanh/txt.io"
                fgColor="white"
                bgColor="black"
                target="_blank"
              />
              <SocialIcon
                url="https://txt-io.vercel.app/"
                fgColor="white"
                bgColor="black"
                target="https://txt-io.vercel.app/"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#31BAFE]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

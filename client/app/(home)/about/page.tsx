"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";

const techStack = [
  { icon: "reactjs.svg", name: "React" },
  { icon: "next.svg", name: "Next.js" },
  { icon: "nodejs.svg", name: "Node.js" },
  { icon: "javascript.svg", name: "JavaScript" },
  { icon: "typescript.svg", name: "TypeScript" },
  { icon: "tailwindcss.svg", name: "TailwindCSS" },
  { icon: "framermotion.svg", name: "Framer Motion" },
  { icon: "express.svg", name: "Express.js" },
  { icon: "sass.svg", name: "SASS" },
  { icon: "mongodb.svg", name: "MongoDB" },
  { icon: "redux.svg", name: "Redux" },
  { icon: "firebase.svg", name: "Firebase" },
  { icon: "supabase.svg", name: "Supabase" },
  { icon: "git.svg", name: "Git" },
  { icon: "redis.svg", name: "Redis" },
   { icon: "postman.svg", name: "Postman" },
];

const Page = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#022c43] px-6 md:px-16">
      <div className="h-full flex flex-col md:flex-row gap-10">

        {/* LEFT — ABOUT */}
        <div className="flex-1 overflow-y-auto mt-8 py-10">
          <div className="text-white font-bold text-3xl md:text-5xl">
            <span className="block text-yellow-400 text-sm opacity-60 mb-2 ">
              &lt;h1&gt;
            </span>
            <AnimatedText>About Me</AnimatedText>
            <span className="block text-yellow-400 text-sm opacity-60 mt-2">
              &lt;/h1&gt;
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mt-4 text-white">
            I’m Shittu Odunayo O.
          </h2>

          <div className="mt-6 text-white space-y-6 text-sm md:text-base leading-relaxed text-justify max-w-xl">
            <p>
              I write code, break things, fix them, and make it all come together.
              I build performant web apps using Next.js, React, and Node.js—
              ensuring they run smoothly and efficiently.
            </p>

            <p>
              In my free time, I enjoy reading tech blogs, contributing to
              open-source projects, and exploring new frameworks.
            </p>

            <p>
              Whether you’re starting from scratch or reimagining something
              existing, I’d love to help bring your vision to life.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-block mt-8 bg-yellow-500 text-black font-semibold px-6 py-2 hover:bg-white transition"
          >
            Contact Me
          </a>
        </div>

        {/* RIGHT — TECH STACK */}
        <div className="flex-1 overflow-y-auto py-10 flex flex-col mt-8 items-start">
          <div className="text-white font-bold text-3xl md:text-5xl mb-6">
            <span className="block text-yellow-400 text-sm opacity-60 mb-2">
              &lt;h1&gt;
            </span>
            <AnimatedText>My Tech Stack</AnimatedText>
            <span className="block text-yellow-400 text-sm opacity-60 mt-2">
              &lt;/h1&gt;
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 max-w-md">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="relative w-12 h-12">
                  <Image
                    src={`/svgs/${tech.icon}`}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-gray-300">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;

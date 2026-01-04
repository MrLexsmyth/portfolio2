"use client";

import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { motion as Motion, Variants } from "framer-motion";

/* -------------------- DATA -------------------- */

const projectData = [
  {
    title: "GadUp",
    image: "/gadup.jpg",
    description: "A Full-Stack E-commerce store template.",
    live: "https://gadup.vercel.app/",
    code: "https://github.com/MrLexsmyth/gadup",
    techs: [
      "reactjs.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "sass.svg",
      "framermotion.svg",
      "next.svg",
      "express.svg",
      "git.svg",
      "mongodb.svg",
      "nodejs.svg",
      "typescript.svg",
    ],
  },
  {
    title: "MeasurePro",
    image: "/measurepro.png",
    description:
      "A digital measurement management system for tailors and fashion designers.",
    live: "https://measure-pro.vercel.app/",
    code: "https://github.com/MrLexsmyth/MeasurePro",
    techs: [
      "reactjs.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "sass.svg",
      "framermotion.svg",
      "next.svg",
      "express.svg",
      "git.svg",
      "mongodb.svg",
      "nodejs.svg",
      "typescript.svg",
    ],
  },
  {
    title: "Sheymis Art Gallery",
    image: "/sheymis.png",
    description: "Showcasing the captivating works of Sheymis.",
    live: "https://sheymis.vercel.app/",
    code: "https://github.com/MrLexsmyth/sheymis",
    techs: [
      "reactjs.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "sass.svg",
      "framermotion.svg",
      "next.svg",
    ],
  },
  {
    title: "Nigerian Institution Of Surveyors",
    image: "/nis.png",
    description:
      "Manages member registration, payments, and public directory access with admin dashboard.",
    live: "https://nigerian-institutionof-surveyors.vercel.app/",
    techs: [
      "reactjs.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "sass.svg",
      "framermotion.svg",
      "next.svg",
      "express.svg",
      "git.svg",
      "mongodb.svg",
      "nodejs.svg",
      "typescript.svg",
    ],
  },
  {
    title: "Larx Clothinz",
    image: "/ecommence.png",
    description:
      "A sleek and modern online fashion store built for style and convenience.",
    live: "https://larxclothing.vercel.app/",
    code: "https://github.com/MrLexsmyth/larxclothing",
    techs: [
      "reactjs.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "redux.svg",
      "sass.svg",
      "firebase.svg",
    ],
  },
  {
    title: "Estate Management App",
    image: "/estate.png",
    description: "Manage properties, tenants, and payments all in one place.",
    live: "https://estate-lake-rho.vercel.app/",
    techs: [
      "reactjs.svg",
      "typescript.svg",
      "framermotion.svg",
      "tailwindcss.svg",
      "redux.svg",
      "next.svg",
    ],
  },
  {
    title: "A CBT Quiz",
    image: "/cbt.png",
    description: "Simulates a Computer-Based Testing environment.",
    live: "http://cbtapp.vercel.app/",
    code: "https://github.com/MrLexsmyth/cbtapp",
    techs: [
      "reactjs.svg",
      "firebase.svg",
      "tailwindcss.svg",
      "javascript.svg",
    ],
  },
  {
    title: "Cinema Booking App",
    image: "/cinema.png",
    description: "Seamless movie-going experience.",
    live: "https://cinema-application.vercel.app/",
    code: "https://github.com/MrLexsmyth/Cinema-application",
    techs: [
      "reactjs.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "redux.svg",
      "sass.svg",
    ],
  },
  {
    title: "A Church Website",
    image: "/church.png",
    description:
      "Beautifully crafted platform representing identity of a church.",
    live: "https://churchorganization-page-nla7.vercel.app/",
    code: "https://github.com/MrLexsmyth/Churchorganization-page",
    techs: [
      "reactjs.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "sass.svg",
    ],
  },
  {
    title: "Puzzle Game",
    image: "/game.png",
    description: "Fun web app to challenge logic and problem-solving.",
    live: "https://puzzle-picture-game.vercel.app/",
    code: "https://github.com/MrLexsmyth/Puzzle-Picture-Game",
    techs: [
      "reactjs.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "redux.svg",
      "sass.svg",
    ],
  },
  {
    title: "Coffee Shop Website",
    image: "/coffee.png",
    description: "Responsive landing page for a coffee store.",
    live: "https://coffeeborcelle-flax.vercel.app/",
    code: "https://github.com/MrLexsmyth/Coffee-landing-page",
    techs: [
      "reactjs.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "sass.svg",
    ],
  },
];

/* -------------------- ANIMATIONS -------------------- */

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const flip: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -310 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const animationVariants: Variants[] = [
  flip,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
  scaleIn,
];

const animationVar: Variants[] = [
  scaleIn,
  fadeInUp,
  scaleIn,
  flip,
  fadeInLeft,
  fadeInRight,
];

/* -------------------- COMPONENT -------------------- */

const PortfolioPage = () => {
  return (
    <div className="relative h-screen bg-[#022c43] overflow-hidden px-6 md:px-16 py-10">
      {/* Title */}
      <div className="relative inline-block text-white font-bold mt-8 text-3xl md:text-5xl mb-8">
        <span className="block text-yellow-400 text-sm opacity-60 mb-2 select-none">
          &lt;h1&gt;
        </span>
        <AnimatedText>
          <span>Portfolio</span>
        </AnimatedText>
        <span className="block text-yellow-400 text-sm opacity-60 mt-2 select-none">
          &lt;/h1&gt;
        </span>
      </div>

      {/* Scrollable content */}
      <div className="h-[calc(100vh-150px)] overflow-y-auto pr-2 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-6">
          {projectData.map((project, i) => {
            const variant =
              animationVariants[i % animationVariants.length];
            const flipVariant =
              animationVar[i % animationVar.length];

            return (
              <Motion.div
                key={i}
                custom={i}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#0a1a2f] rounded-lg p-4 flex flex-col justify-between shadow-lg hover:scale-105 transition-transform"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-md"
                    priority={i === 0}
                  />
                </div>

                {/* Title & Description */}
                <h2 className="text-white font-semibold text-lg mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, idx) => (
                    <div key={idx} className="w-6 h-6 relative">
                      <Image
                        src={`/svgs/${tech}`}
                        alt={tech}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-yellow-400 font-medium text-sm border border-white px-4 py-2 rounded-md hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-200 hover:underline"
                    >
                      Live Preview →
                    </a>
                  )}
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

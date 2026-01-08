"use client";

import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import EncryptText from "@/components/EncryptText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {

    const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#022c43] px-6">
     
      <ul className="flex items-center gap-4 mt-8">
  <motion.li>
    <a
     href="https://drive.google.com/file/d/18jseBRLyIySyOI2DKSDFS4c_30Z49CQb/view?usp=drive_link"
      className="text-white no-underline inline-flex items-center gap-2"
    >
      <FileText size={20} />
      Resume
    </a>
  </motion.li>

  <motion.div
    className="h-5 w-px bg-gray-300"
    initial="hidden"
    animate="visible"
    variants={fadeInVariants}
  />

  <motion.li>
    <a
      href="mailto:shittuodunayo2020@gmail.com"
      className="
        inline-block
        px-5 py-2.5
        bg-[#680aed]
        border border-[#008cba]
        rounded-full
        text-white
        font-bold
        transition-colors
        duration-300
        hover:bg-[#5a09d0]
        hover:border-[#006f94]
      "
    >
      Lets work 💻
    </a>
  </motion.li>
</ul>

      <div className="flex flex-col items-center mt-16 text-center max-w-3xl">
        
        {/* Animated Text */}
        <AnimatedText>
          <EncryptText
            text="Hey there!"
            className="text-3xl md:text-5xl font-semibold mb-4"
          />

          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            I’m Shittu Odunayo
          </h1>

          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            a Web Developer.
          </h1>
        </AnimatedText>

        <EncryptText
          text="MERN STACK DEVELOPER"
          className="text-[12px] md:text-[14px] opacity-80 text-gray-300 mt-2"
        />

        {/* Description */}
        <motion.div
          className="mt-6 text-white text-sm md:text-base leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            I’m a full-stack developer who builds efficient, user-focused web
            applications using React, Next.js, TypeScript, and other technologies
            — always aiming for clean code and practical, scalable solutions.
          </p>
        </motion.div>
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
         <a
  href="https://www.linkedin.com/in/shittu-odunayo-opeyemi-94abbb207/"
  className="text-white/50 text-[32px] ml-[30px] mr-[10px] transition-colors duration-300 hover:text-white"
>
  <FontAwesomeIcon icon={faLinkedin} />
</a>

<a
  href="https://wa.me/2348169273808"
  className="text-white/50 text-[32px] ml-[30px] mr-[10px] transition-colors duration-300 hover:text-white"
>
  <FontAwesomeIcon icon={faWhatsapp} />
</a>

<a
  href="https://t.co/F8pwGHzqve"
  className="text-white/50 text-[32px] ml-[30px] mr-[10px] transition-colors duration-300 hover:text-white"
>
  <FontAwesomeIcon icon={faGithub} />
</a>

<a
  href="https://x.com/ShittuOdunayoO"
  className="text-white/50 text-[32px] ml-[30px] mr-[10px] transition-colors duration-300 hover:text-white"
>
  <FontAwesomeIcon icon={faXTwitter} />
</a>

        </motion.div>

        {/* Button */}
        {/* <a
          href="https://drive.google.com/file/d/18jseBRLyIySyOI2DKSDFS4c_30Z49CQb/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-10 gap-2 bg-[#680aed] text-black font-semibold px-6 py-3 hover:opacity-90 transition"
        >
          <FileText size={20} />
          View Resume
        </a> */}
      </div>
    </div>
  );
}

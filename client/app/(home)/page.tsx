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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#022c43] px-4 sm:px-6 py-8 sm:py-0">
      
      {/* Top Navigation - Responsive */}
      <nav className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-8"
        >
          {/* Resume Link */}
          <motion.a
            href="https://drive.google.com/file/d/18jseBRLyIySyOI2DKSDFS4c_30Z49CQb/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-sm sm:text-base no-underline hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={18} className="sm:w-5 sm:h-5" />
            <span>Resume</span>
          </motion.a>

          {/* Divider - Hidden on mobile */}
          <motion.div
            className="hidden sm:block h-5 w-px bg-gray-300"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          />

          {/* Work Button */}
          <motion.a
            href="mailto:shittuodunayo2020@gmail.com"
            className="
              inline-block
              px-4 sm:px-5
              py-2 sm:py-2.5
              bg-[#680aed]
              border border-[#008cba]
              rounded-full
              text-white
              font-bold
              text-sm sm:text-base
              transition-all
              duration-300
              hover:bg-[#5a09d0]
              hover:border-[#006f94]
              active:scale-95
              whitespace-nowrap
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s work 💻
          </motion.a>
        </motion.div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-12 sm:mt-16 text-center max-w-3xl w-full">
        
        {/* Animated Text Section */}
        <AnimatedText>
          {/* Greeting */}
          <EncryptText
            text="Hey there!"
            className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 sm:mb-4"
          />

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 sm:mb-4 leading-tight">
            I&apos;m Shittu Odunayo O.
          </h1>

          {/* Subtitle - Responsive */}
          <h2 className="text-lg sm:text-xl md:text-4xl font-semibold leading-snug px-2">
           A Full-Stack Web Developer
          </h2>
          <h2 className="text-lg sm:text-xl md:text-4xl font-semibold mb-3 sm:mb-4 leading-snug px-2">
          An  Accounting Software Consultant
          </h2>
        </AnimatedText>

        {/* Badge */}
        <EncryptText
          text="MERN STACK DEVELOPER"
          className="text-xs sm:text-sm opacity-80 text-gray-300 mt-2 px-2"
        />

        {/* Description - Responsive */}
        <motion.div
          className="mt-6 sm:mt-8 text-white text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl px-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-justify sm:text-center">
            I&apos;m a Full-Stack Developer and ERP Technical Consultant specializing in
            building scalable web applications and business management solutions. I work
            with technologies such as React, Next.js, TypeScript, and Node.js, while also
            helping organizations implement and customize ERP systems for inventory
            management, accounting, sales, procurement, and operational efficiency. My
            goal is to create reliable, user-friendly solutions that improve productivity
            and support business growth.
          </p>
        </motion.div>

        {/* Social Media Icons - Responsive Grid */}
        <motion.div
          className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6 flex-wrap"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/shittu-odunayo-opeyemi-94abbb207/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-4xl sm:text-5xl transition-all duration-300 hover:text-white hover:scale-110 active:scale-95"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/2348169273808"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-4xl sm:text-5xl transition-all duration-300 hover:text-white hover:scale-110 active:scale-95"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://t.co/F8pwGHzqve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-4xl sm:text-5xl transition-all duration-300 hover:text-white hover:scale-110 active:scale-95"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>

          {/* Twitter/X */}
          <motion.a
            href="https://x.com/ShittuOdunayoO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-4xl sm:text-5xl transition-all duration-300 hover:text-white hover:scale-110 active:scale-95"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Twitter/X"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </motion.a>
        </motion.div>

        {/* Mobile Bottom Spacing */}
        <div className="h-8 sm:h-0" />
      </div>
    </div>
  );
}
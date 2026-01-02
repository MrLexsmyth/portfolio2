"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center bg-[#022c43] px-6 md:px-16 py-10">
      
      {/* LEFT: Animated Text */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-left md:text-left mt-4">
        <AnimatedText>
           <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Hi,
          </h1>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            I’m Shittu Odunayo
          </h1>
           <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Web Developer.
          </h1>  
        </AnimatedText>

        <p className="text-[12px] md:text-[14px] opacity-80 text-gray-300"> MERN STACK DEVELOPER</p>
        
        <a
          href="https://drive.google.com/file/d/18jseBRLyIySyOI2DKSDFS4c_30Z49CQb/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-12 gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 hover:bg-yellow-500 transition w-max"
        >
          <FileText size={20} />
          View Resume
        </a>
      </div>

      {/* RIGHT: Image */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <Image
          src="/odunayo.jpg"
          alt="Shittu Odunayo portrait"
          width={350}     
          height={400}     
          priority
          className="object-cover md:w-[500px] md:h-[550px]"
        />
      </div>

    </div>
  );
}

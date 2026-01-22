"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  image: string;
  testimonial: string;
  startup: string;
}

const textVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const testimonials: Testimonial[] = [
  {
    name: "Divine Ada",
    image: "/pm.jpg",
    testimonial:
      "Working with Odunayo was a game-changer for our real estate platform. He delivered a fast, modern, and user-friendly website that significantly improved property discovery and customer inquiries. Our online presence now truly reflects the quality of our brand.",
    startup: "BrightO ",
  },
  {
    name: "Olawale Olatunji",
    image: "/coo.jpg",
    testimonial:
     "Since launching our new e-commerce website, we’ve seen a noticeable increase in sales and customer engagement. Odunayo delivered exactly what our business needed. As an e-commerce startup, we needed a reliable and scalable platform. Odunayo built a smooth shopping experience that helped us launch confidently and grow faster.",
    startup: "GadUp",
  },
  {
    name: "Omowumi Adetunji",
    image: "/omowumi.jpg",
    testimonial:
     "This web app completely changed how we manage our clients. We can now securely store body measurements and contact details in one place, which has made our workflow faster and more professional.",
    startup: "MeasurePro",
  },
  {
  name: "Semiloore",
  image: "/meettheartist.png",
  testimonial:
    "This web app transformed how we manage our art gallery. We can now organize artworks, client details, and inquiries in one place, making our operations smoother and more professional.",
  startup: "Sheymis_Art",
},


];

export default function TestimonialsPage() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-[#022c43] px-6 md:px-16 py-10 flex flex-col gap-10">
      
      {/* TOP — PAGE TITLE CENTERED */}
      <div className="text-center">
         <div className="relative inline-block font-bold mt-4 text-3xl md:text-5xl mb-8">
                <span className="block text-left text-yellow-400 text-sm opacity-60 mb-2 select-none">
                  &lt;h1&gt;
                </span>
                <AnimatedText>
                  <span> Amazing Testimonials</span>
                </AnimatedText>
                <span className="block text-left text-yellow-400 text-sm opacity-60 mt-2 select-none">
                  &lt;/h1&gt;
                </span>
              </div>
        <p className=" text-white max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Here’s what people and startups say about working with me. I take pride
          in building performant, reliable, and beautiful web apps that help
          businesses thrive.
        </p>
      </div>

      {/* BOTTOM — IMAGE STACK LEFT, TESTIMONIAL RIGHT */}
      <div className="flex flex-col md:flex-row gap-24 items-center justify-center mt-20">
        {/* IMAGE STACK LEFT */}
<div className="relative w-64 h-56 flex items-center justify-center">
  {testimonials.map((t, i) => {
    let position = i - index;
    if (position < -1) position += testimonials.length;
    if (position > 1) position -= testimonials.length;

    const xOffset = position * 40;
    const scale = position === 0 ? 1 : 0.8;
    const zIndex = position === 0 ? 30 : 10;

    return (
      <motion.div
        key={t.name}
        className="absolute w-70 h-70 md:w-86 md:h-[24rem] rounded-xl overflow-hidden shadow-lg cursor-pointer"
        initial={{ opacity: 0, x: 50, scale: 0.7 }}
        animate={{
          opacity: position === 0 ? 1 : 0.7,
          x: xOffset,
          scale,
          zIndex,
        }}
        transition={{ duration: 0.5 }}
        onClick={() => {
          if (position === 0) next();
        }}
      >
        <Image
          src={t.image}
          alt={t.name}
          fill
          className="object-cover"
        />
      </motion.div>
    );
  })}
</div>


        {/* TESTIMONIAL TEXT RIGHT */}
        <div className="flex-1 text-center md:text-left max-w-lg">
         
          <p className="text-yellow-400 font-bold mb-1">{testimonials[index].name}</p>
          <p className="text-gray-400 text-sm">{testimonials[index].startup}</p>
<AnimatePresence mode="wait">
  <motion.p
    key={index}
    variants={textVariant}
    initial="hidden"
    animate="visible"
    exit="hidden"
    className="text-lg mt-4 mb-2 text-gray-100 flex flex-wrap gap-x-1"
  >
    {testimonials[index].testimonial.split(" ").map((word, i) => (
      <motion.span key={i} variants={wordVariant}>
        {word}
      </motion.span>
    ))}
  </motion.p>
</AnimatePresence>
         
          {/* NAVIGATION */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <button
              onClick={prev}
              className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

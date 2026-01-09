"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  image: string;
  testimonial: string;
  startup: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    image: "/odunayo.jpg",
    testimonial:
      "Working with Odunayo was a game-changer! Our web app performance improved drastically.",
    startup: "TechFlow",
  },
  {
    name: "John Smith",
    image: "/odunayo.jpg",
    testimonial:
      "Odunayo built our e-commerce platform from scratch and it works flawlessly.",
    startup: "ShopEase",
  },
  {
    name: "Alice Johnson",
    image: "/odunayo.jpg",
    testimonial:
      "The attention to detail and responsiveness was amazing. Highly recommended!",
    startup: "FinTrack",
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
        <div className="text-white font-bold text-3xl md:text-5xl">
          <span className="block text-yellow-400 text-sm opacity-60 mb-2">
            &lt;h1&gt;
          </span>
          <AnimatedText>Testimonials</AnimatedText>
          <span className="block text-yellow-400 text-sm opacity-60 mt-2">
            &lt;/h1&gt;
          </span>
        </div>
        <p className="mt-6 text-white max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Here’s what people and startups say about working with me. I take pride
          in building performant, reliable, and beautiful web apps that help
          businesses thrive.
        </p>
      </div>

      {/* BOTTOM — IMAGE STACK LEFT, TESTIMONIAL RIGHT */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        
        {/* IMAGE STACK LEFT */}
        <div className="relative w-64 h-64 flex items-center justify-center">
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
                className="absolute w-64 h-64 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 50, scale: 0.7 }}
                animate={{
                  opacity: position === 0 ? 1 : 0.7,
                  x: xOffset,
                  scale,
                  zIndex,
                }}
                transition={{ duration: 0.5 }}
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
          <p className="text-gray-100 text-lg mb-2">
            {testimonials[index].testimonial}
          </p>
          <p className="text-yellow-400 font-semibold">{testimonials[index].name}</p>
          <p className="text-gray-400 text-sm">{testimonials[index].startup}</p>

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

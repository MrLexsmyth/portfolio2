"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
  name: "Busari Idiat",
  image: "/vybezlogo.png",
  testimonial:
    "Odunayo built us a complete system that changed how we run the arcade. Customers now book and pay online before they arrive, our staff handle walk-ins and print receipts in seconds, and I can see the day's sales, staff attendance and stock from one dashboard. We've gone from notebooks to something that actually runs the business.",
  startup: "Vybez Arcade",
},
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
      "Since launching our new e-commerce website, we've seen a noticeable increase in sales and customer engagement. Odunayo delivered exactly what our business needed. As an e-commerce startup, we needed a reliable and scalable platform. Odunayo built a smooth shopping experience that helped us launch confidently and grow faster.",
    startup: "GadUp",
  },
  {
    name: " James Marvellous Chidinma",
    image: "/CEO.jpg",
    testimonial:
      "Odunayo delivered exactly what our business needed. As an e-commerce startup, we needed a reliable and scalable platform. Odunayo built a smooth shopping experience that helped us launch confidently and grow faster.",
    startup: "LookGirly",
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
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageStackRef = useRef<HTMLDivElement>(null);
  const testimonialBoxRef = useRef<HTMLDivElement>(null);
  const navButtonsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Page entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with scale and fade
      gsap.from(titleRef.current, {
        duration: 0.8,
        opacity: 0,
        scale: 0.8,
        y: -30,
        ease: "back.out(1.7)",
      });

      // Animate description
      gsap.from(descriptionRef.current, {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.3,
        ease: "power2.out",
      });

      // Animate image stack
      gsap.from(imageStackRef.current, {
        duration: 1,
        opacity: 0,
        x: -50,
        delay: 0.2,
        ease: "power2.out",
      });

      // Animate testimonial box
      gsap.from(testimonialBoxRef.current, {
        duration: 1,
        opacity: 0,
        x: 50,
        delay: 0.2,
        ease: "power2.out",
      });

      // Animate navigation buttons with stagger
      gsap.from(navButtonsRef.current?.querySelectorAll("button") || [], {
        duration: 0.6,
        opacity: 0,
        y: 20,
        delay: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate on index change
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pulse the image
      gsap.to(imageStackRef.current, {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.inOut",
      });

      gsap.to(imageStackRef.current, {
        duration: 0.3,
        scale: 1,
        delay: 0.3,
        ease: "power2.inOut",
      });

      // Testimonial box rotation effect
      gsap.to(testimonialBoxRef.current, {
        duration: 0.4,
        rotationZ: 1,
        ease: "power2.inOut",
      });

      gsap.to(testimonialBoxRef.current, {
        duration: 0.4,
        rotationZ: 0,
        delay: 0.4,
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [index]);

  // Scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play pause resume pause",
        },
      });

      // Add floating animation to image stack on scroll
      masterTL.to(
        imageStackRef.current,
        {
          duration: 3,
          y: -20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#022c43] px-6 md:px-16 py-10 flex flex-col gap-10"
    >
      {/* TOP — PAGE TITLE CENTERED */}
      <div className="text-center">
        <div
          ref={titleRef}
          className="relative inline-block font-bold mt-4 text-3xl md:text-5xl mb-8 w-full"
        >
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
        <p
          ref={descriptionRef}
          className=" text-white max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Here&apos;s what people and startups say about working with me. I take pride
          in building performant, reliable, and beautiful web apps that help
          businesses thrive.
        </p>
      </div>

      {/* BOTTOM — IMAGE STACK LEFT, TESTIMONIAL RIGHT */}
      <div className="flex flex-col md:flex-row gap-24 items-center justify-center mt-20">
        {/* IMAGE STACK LEFT */}
        <div
          ref={imageStackRef}
          className="relative w-64 h-56 flex items-center justify-center"
        >
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
                className="absolute w-70 h-70 md:w-86 md:h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, x: 50, scale: 0.7 }}
                animate={{
                  opacity: position === 0 ? 1 : 0.7,
                  x: xOffset,
                  scale,
                  zIndex,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => {
                  if (position === 0) next();
                }}
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            );
          })}
        </div>

        {/* TESTIMONIAL TEXT RIGHT */}
        <div
          ref={testimonialBoxRef}
          className="flex-1 text-center md:text-left max-w-lg"
        >
          <motion.div
            key={`testimonial-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-yellow-400 font-bold mb-1">
              {testimonials[index].name}
            </p>
            <p className="text-gray-400 text-sm">{testimonials[index].startup}</p>
          </motion.div>

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
          <div ref={navButtonsRef} className="flex gap-4 mt-4 justify-center md:justify-start">
            <NavButton
              onClick={prev}
              icon={<ChevronLeft size={20} />}
              ariaLabel="Previous testimonial"
            />
            <NavButton
              onClick={next}
              icon={<ChevronRight size={20} />}
              ariaLabel="Next testimonial"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Separate nav button component for better animation handling
function NavButton({
  onClick,
  icon,
  ariaLabel,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  ariaLabel: string;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleHover = (isHovering: boolean) => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      duration: 0.3,
      scale: isHovering ? 1.15 : 1,
      backgroundColor: isHovering ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.2)",
      ease: "power2.out",
    });
  };

  const handleClick = () => {
    if (!buttonRef.current) return;

    // Create a ripple/pulse effect
    gsap.timeline()
      .to(
        buttonRef.current,
        {
          duration: 0.15,
          scale: 0.9,
          ease: "power2.in",
        },
        0
      )
      .to(
        buttonRef.current,
        {
          duration: 0.15,
          scale: 1.15,
          ease: "power2.out",
        },
        0.15
      )
      .to(
        buttonRef.current,
        {
          duration: 0.1,
          scale: 1,
          ease: "power2.out",
        },
        0.3
      );

    onClick();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      aria-label={ariaLabel}
      className="p-2 bg-white/20 rounded-full transition text-white cursor-pointer"
    >
      {icon}
    </button>
  );
}
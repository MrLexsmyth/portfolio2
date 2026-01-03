"use client";

import React, { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedText from "@/components/AnimatedText";

const Page = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_s7k0r1v",
        "template_d9x8l3c",
        form.current,
        "K-_TU6etEWatbIo2t"
      )
      .then(
        () => {
          setNotification("Your message has been sent successfully!");
          form.current?.reset();
          setTimeout(() => setNotification(null), 3000);
        },
        () => {
          setNotification("Failed to send message. Please try again.");
          setTimeout(() => setNotification(null), 3000);
        }
      );
  };

  return (
    <div className="h-screen bg-[#022c43] flex items-center justify-center overflow-hidden px-6">
      <div className="w-full max-w-xl text-white">

         <div className="text-white font-bold text-3xl md:text-5xl mb-4">
                   <span className="block text-yellow-400 text-sm opacity-60 mb-2">
                     &lt;h1&gt;
                   </span>
                   <AnimatedText>Contact Me</AnimatedText>
                   <span className="block text-yellow-400 text-sm opacity-60 mt-2">
                     &lt;/h1&gt;
                   </span>
                 </div>

        {/* TEXT */}
        <h1>Get in touch</h1>
        <p className="text-sm text-gray-300 text-center mb-6 leading-relaxed">
          I’m always open to collaborations, new projects, or just a friendly
          chat. Drop a message and let’s build something meaningful together.
        </p>

        {notification && (
          <p className="text-center text-yellow-400 text-sm mb-4">
            {notification}
          </p>
        )}

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">

          <Motion.input
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            type="text"
            name="user_name"
            required
            placeholder="Full Name"
            className="w-full p-3 bg-transparent border border-gray-500 focus:outline-none"
          />

          <Motion.input
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            type="email"
            name="user_email"
            required
            placeholder="Email Address"
            className="w-full p-3 bg-transparent border border-gray-500 focus:outline-none"
          />

          <Motion.textarea
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            name="message"
            required
            rows={4}
            placeholder="Write your message..."
            className="w-full p-3 bg-transparent border border-gray-500 focus:outline-none"
          />

          <Motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 mt-4"
          >
            Send Message
          </Motion.button>
        </form>
      </div>
    </div>
  );
};

export default Page;

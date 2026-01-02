"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-full flex flex-col justify-between items-center p-4 text-[#ffd700]">
      
      {/* LOGO */}
     <motion.div
  className="mb-10"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Link href="/" >
  <div className="w-12 h-12 mt-4  relative">
    <Image
      src="/logo.jpeg" 
      alt="Logo"
      fill
      className="object-contain rounded-full"
    />
  </div>
  </Link>
</motion.div>
      {/* NAV LINKS */}
      <nav className="flex flex-col mt-14 gap-1 items-center text-[#ffd700]">
        <SidebarLink href="/" icon={<Home size={24} />} label="Home" />
        <SidebarLink href="/about" icon={<User size={24} />} label="About" />
        <SidebarLink href="/portfolio" icon={<Briefcase size={24} />} label="Portfolio" />
       
        <SidebarLink href="/contact" icon={<Mail size={24} />} label="Contact" />
      </nav>

      {/* SOCIAL ICONS */}
      <div className="flex flex-col mt-10 mb-10">
        <SocialIcon href="https://github.com/MrLexsmyth" icon={<Github size={18} />} />
        <SocialIcon href="https://linkedin.com" icon={<Linkedin size={18} />} />
        <SocialIcon href="https://x.com/ShittuOdunayoO" icon={<Twitter size={18} />} />
        <SocialIcon href="https://wa.me/2348169273808"icon={<MessageCircle size={18} />} />
      </div>
    </aside>
  );
}

/* SidebarLink – icon swaps to label with motion */
interface SidebarLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

function SidebarLink({ href, icon, label }: SidebarLinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        href={href}
        className="flex items-center justify-center w-14 h-12 hover:w-14 transition-all duration-300 overflow-hidden group"
      >
        {/* Icon */}
        <motion.span
          className="block group-hover:hidden"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {icon}
        </motion.span>

        {/* Label */}
        <motion.span
          className="hidden group-hover:block text-sm font-medium"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      </Link>
    </motion.div>
  );
}

/* Social icons – motion hover */
interface SocialIconProps {
  href: string;
  icon: ReactNode;
}

function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition flex justify-center w-12 h-12 items-center"
      whileHover={{ scale: 1.15, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
    </motion.a>
  );
}

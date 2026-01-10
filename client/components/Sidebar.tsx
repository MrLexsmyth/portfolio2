"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import {
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Pen,
} from "lucide-react";


type SidebarProps = {
  onLinkClick?: () => void;
};

export default function Sidebar({ onLinkClick }: SidebarProps) {
  return (
    <aside className="h-full flex flex-col justify-between items-center p-4 text-white">
      
      {/* LOGO */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" onClick={onLinkClick}>
          <div className="w-12 h-12 mt-4 relative">
            <Image
              src="/logo22.png"
              alt="Logo"
              fill
              className="object-contain rounded-full"
            />
            
          </div>
        </Link>
      </motion.div>

      {/* NAV LINKS */}
      <nav className="flex flex-col mt-4 gap-1 items-center">
        <SidebarLink href="/" icon={<Home size={24} />} label="Home" onClick={onLinkClick} />
        <SidebarLink href="/about" icon={<User size={24} />} label="About" onClick={onLinkClick} />
        <SidebarLink href="/portfolio" icon={<Briefcase size={24} />} label="Portfolio" onClick={onLinkClick} />
        <SidebarLink href="/contact" icon={<Mail size={24} />} label="Contact" onClick={onLinkClick} />
        <SidebarLink href="/testimonials" icon={<Pen size={24} />} label="Testimonials" onClick={onLinkClick} />
      </nav>

      {/* SOCIAL ICONS */}
      <div className="flex flex-col mt-4 mb-10">
        <SocialIcon href="https://github.com/MrLexsmyth" icon={<Github size={18} />} />
        <SocialIcon href="https://linkedin.com/dsdsddd" icon={<Linkedin size={18} />} />
        <SocialIcon href="https://x.com/ShittuOdunayoO" icon={<Twitter size={18} />} />
       <a
  href="https://wa.me/2348169273808"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-green-400 mt-2 ml-4"
>
  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
</a>
      </div>
    </aside>
  );
}

/* SidebarLink */
interface SidebarLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

function SidebarLink({ href, icon, label, onClick }: SidebarLinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        href={href}
        onClick={onClick} 
        className="flex items-center justify-center w-14 h-12 transition-all duration-300 overflow-hidden group"
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

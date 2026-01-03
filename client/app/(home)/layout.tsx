"use client";

import Sidebar from "../../components/Sidebar";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-20 bg-black">
        <Sidebar />
      </aside>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#022c43] p-2 rounded text-white"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar Panel */}
            <motion.aside
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="fixed top-0 left-0 h-full w-18 bg-[#022c43] p-4 z-50"
            >
              <button
                onClick={closeSidebar}
                className="mb-6 text-white"
              >
                <X size={22} />
              </button>

             
              <Sidebar onLinkClick={closeSidebar} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="flex items-center justify-between mt-8 mb-6 mx-4 sm:mx-auto max-w-[1100px] px-4 sm:px-8 py-1 sm:py-2 gap-6 sm:gap-0 rounded-2xl shadow-md header-animated-bg backdrop-blur-sm border border-[var(--color-support)]"
      style={{
        borderColor: "var(--color-support)",
        boxShadow: "4px 10px 32px -8px #D9A7BE22, 8px 0 24px -12px #BF99A022",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.39, 0.58, 0.57, 1] }}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={60}
        height={30}
        className="sm:w-[200px] sm:h-[150px] w-[80px] h-[80px]"
        style={{ filter: "drop-shadow(0 2px 8px #D9A7BE55)" }}
      />

      {/* Desktop nav */}
      <nav className="hidden sm:block pr-6">
        <ul className="flex gap-6 items-center">
          <li>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/"
                className="font-title text-lg text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors duration-200"
              >
                Home
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                href="/about"
                className="font-title text-lg text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors duration-200"
              >
                About
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="font-title text-lg text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors duration-200"
              >
                Contact
              </Link>
            </motion.div>
          </li>
        </ul>
      </nav>

      {/* Mobile menu button */}
      <div className="sm:hidden relative">
        <motion.button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          initial={false}
          animate={open ? "open" : "closed"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] shadow-sm border border-[var(--color-support)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(217,167,190,0.12), rgba(242,240,228,0.6))",
            backdropFilter: "blur(3px)",
          }}
        >
          <div className="w-6 h-6 flex items-center justify-center relative">
            <motion.span
              className="absolute block w-4 h-[2px] bg-[var(--color-primary)] rounded"
              variants={{
                closed: { rotate: 0, y: -4, opacity: 1 },
                open: { rotate: 45, y: 0, opacity: 1 },
              }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              style={{ transformOrigin: "center" }}
            />

            <motion.span
              className="absolute block w-4 h-[2px] bg-[var(--color-primary)] rounded"
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              transition={{ duration: 0.16 }}
            />

            <motion.span
              className="absolute block w-4 h-[2px] bg-[var(--color-primary)] rounded"
              variants={{
                closed: { rotate: 0, y: 4, opacity: 1 },
                open: { rotate: -45, y: 0, opacity: 1 },
              }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              style={{ transformOrigin: "center" }}
            />
          </div>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="absolute left-4 right-4 top-[72px] z-50 rounded-lg bg-[var(--background)] border border-[var(--color-support)] p-4 shadow-lg"
            >
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block font-title text-base text-[var(--color-primary)]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => setOpen(false)}
                    className="block font-title text-base text-[var(--color-primary)]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block font-title text-base text-[var(--color-primary)]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

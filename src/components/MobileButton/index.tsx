"use client";

import { motion } from "framer-motion";
import React from "react";

export interface MobileButtonProps {
  open: boolean;
  onToggle: () => void;
  className?: string;
  buttonRef?: React.Ref<HTMLButtonElement>;
}

export default function MobileButton({
  open,
  onToggle,
  className,
  buttonRef,
}: MobileButtonProps) {
  return (
    <motion.button
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      aria-expanded={open}
      onClick={onToggle}
      ref={buttonRef as any}
      initial={false}
      animate={open ? "open" : "closed"}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
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
  );
}

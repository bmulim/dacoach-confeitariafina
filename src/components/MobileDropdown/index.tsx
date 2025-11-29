"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export interface MobileDropdownProps {
  open: boolean;
  children?: React.ReactNode;
  className?: string;
  menuRef?: React.Ref<HTMLDivElement>;
}

export default function MobileDropdown({
  open,
  children,
  className,
  menuRef,
}: MobileDropdownProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className={className}
          ref={menuRef as any}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

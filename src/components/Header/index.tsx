"use client";

import Nav from "./Nav";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import MobileButton from "./MobileButton";
import MobileDropdown from "./MobileDropdown";

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      const target = e.target as Node | null;
      if (!target) return;
      if (menuRef.current && menuRef.current.contains(target)) return;
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      setOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <motion.header
      className="flex items-center justify-between mt-4 mb-3 mx-4 sm:mx-auto max-w-[1100px] px-4 sm:px-8 py-1 sm:py-2 gap-6 sm:gap-0 rounded-2xl shadow-lg header-animated-bg backdrop-blur-sm border border-[var(--color-border)]"
      style={{
        borderColor: "var(--color-border)",
        boxShadow:
          "0 4px 20px rgba(139, 111, 122, 0.15), 0 2px 8px rgba(0, 0, 0, 0.08)",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.39, 0.58, 0.57, 1] }}
    >
      <Logo
        src="/logo.svg"
        alt="Logo"
        width={60}
        height={30}
        className="sm:w-[100px] sm:h-[90px] w-[160px] h-[130px]"
        style={{ filter: "drop-shadow(0 2px 8px #D9A7BE55)" }}
      />

      {/* Desktop nav extracted to reusable Nav component (unstyled) */}
      <div className="hidden sm:block pr-6">
        <Nav
          links={[
            { href: "/", label: "Início" },
            { href: "/products", label: "Produtos" },
            { href: "/about", label: "Sobre" },
            { href: "/contact", label: "Contato" },
          ]}
          listClassName="flex gap-6 items-center nav-reset"
          linkClassName="font-title text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors duration-200"
        />
      </div>
      <div className="sm:hidden">
        <MobileButton
          open={open}
          onToggle={() => setOpen((s) => !s)}
          className="p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] shadow-sm border border-[var(--color-support)]"
          buttonRef={buttonRef}
        />
      </div>

      <MobileDropdown
        open={open}
        className="absolute left-0 top-full mt-2 w-full z-50 rounded-lg bg-[var(--background)] border border-[var(--color-support)] p-4 shadow-lg"
        menuRef={menuRef}
      >
        <Nav
          links={[
            { href: "/", label: "Início" },
            { href: "/products", label: "Produtos" },
            { href: "/about", label: "Sobre" },
            { href: "/contact", label: "Contato" },
          ]}
          listClassName="flex flex-col gap-3 nav-reset"
          linkClassName="block font-title font-semibold text-base"
          onLinkClick={() => setOpen(false)}
        />
      </MobileDropdown>
    </motion.header>
  );
}

// Note: helper subcomponents moved to their own folders under `src/components`.

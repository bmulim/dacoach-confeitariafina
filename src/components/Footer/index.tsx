"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Verifica se estamos na homepage
  const isHomePage = pathname === "/";

  const handleWhatsAppClick = () => {
    const phoneNumber = "5521999999999"; // Substitua pelo número real do daCoach
    const message =
      "Olá! Gostaria de mais informações sobre a daCoach Confeitaria Fina.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-auto border-t border-[var(--color-border)] bg-gradient-to-b from-[var(--background)]/90 to-[var(--background)]/95 backdrop-blur-lg"
    >
      {/* Efeito de brilho sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary)]/5 to-transparent" />

      <div className="relative px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Seção Principal de Informações */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Informações do Studio */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-2xl font-bold text-transparent"
              >
                daCoach Confeitaria Fina
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="space-y-3 text-[var(--color-foreground-dark)]"
              >
                <div className="flex items-start space-x-3">
                  <span className="mt-1 text-[var(--color-primary)]">📍</span>
                  <p className="text-sm leading-relaxed">
                    Endereço da Confeitaria
                    <br />
                    Cidade, Estado - CEP
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contato WhatsApp */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-lg font-semibold text-[var(--color-primary)]"
              >
                Entre em Contato
              </motion.h4>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(139, 111, 122, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="group flex items-center space-x-3 rounded-xl border-2 border-[var(--color-primary)]/50 bg-[var(--color-primary)]/10 px-4 py-3 text-[var(--color-primary)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 hover:text-[var(--color-primary-dark)]"
                aria-label="Entrar em contato via WhatsApp"
              >
                <motion.svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </motion.svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium opacity-80">
                    Fale Conosco
                  </span>
                  <span className="text-sm font-semibold">WhatsApp</span>
                </div>
                <motion.div
                  className="ml-auto rounded-full bg-[var(--color-primary)]/20 p-1"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            </div>

            {/* Links de Navegação */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-lg font-semibold text-[var(--color-primary)]"
              >
                Navegação
              </motion.h4>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col space-y-2"
              >
                {/* Só mostra o link Início se não estivermos na homepage */}
                {!isHomePage && (
                  <Link
                    href="/"
                    className="block transform text-[var(--color-foreground-dark)] transition-colors duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                  >
                    Início
                  </Link>
                )}
                <Link
                  href="/products"
                  className="block transform text-[var(--color-foreground-dark)] transition-colors duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                >
                  Produtos
                </Link>
                <Link
                  href="/about"
                  className="block transform text-[var(--color-foreground-dark)] transition-colors duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                >
                  Sobre
                </Link>
                <Link
                  href="/contact"
                  className="block transform text-[var(--color-foreground-dark)] transition-colors duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                >
                  Contato
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Linha Divisória */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="my-8 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent"
          />

          {/* Seção de Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"
          >
            {/* Desenvolvedor */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3"
            >
              <div className="text-sm text-[var(--color-foreground-dark)]">
                <span>Sistema desenvolvido por </span>
                <span className="font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-primary-dark)]">
                  Corelayer
                </span>
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="text-center text-sm text-[var(--color-foreground-dark)]"
            >
              <p>© {currentYear} - Todos os direitos reservados</p>
              <Link
                href="/"
                className="font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]"
              >
                daCoach Confeitaria Fina
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

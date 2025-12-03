"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8 sm:py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-title text-[var(--color-ink)] mb-4">
          Nossa História
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto rounded-full" />
      </motion.section>

      {/* Main Story */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-20"
      >
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/logo.svg"
            alt="daCoach Confeitaria"
            fill
            className="object-contain p-8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/30 to-transparent" />
        </div>

        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-title text-[var(--color-primary)]"
          >
            Bem-vindo à daCoach Confeitaria Fina
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[var(--color-foreground-dark)] leading-relaxed text-lg"
          >
            Nascemos da paixão por criar momentos especiais através da
            confeitaria artesanal. Cada receita é cuidadosamente desenvolvida
            para combinar sabor autêntico com apresentação impecável.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[var(--color-foreground-dark)] leading-relaxed text-lg"
          >
            Nossa missão é transformar ingredientes selecionados em experiências
            inesquecíveis, seja através dos nossos doces tradicionais, opções
            fit ou delícias salgadas para todas as ocasiões.
          </motion.p>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-title text-[var(--color-ink)] text-center mb-12">
          Nossos Valores
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🎂",
              title: "Qualidade Premium",
              description:
                "Utilizamos apenas ingredientes de primeira linha, selecionados cuidadosamente para garantir sabor e frescor incomparáveis.",
            },
            {
              icon: "❤️",
              title: "Feito com Amor",
              description:
                "Cada produto é preparado artesanalmente, com dedicação e carinho, como se fosse para nossa própria família.",
            },
            {
              icon: "🌿",
              title: "Opções Saudáveis",
              description:
                "Oferecemos alternativas fit e funcionais sem abrir mão do sabor, para quem busca equilíbrio na alimentação.",
            },
            {
              icon: "✨",
              title: "Inovação",
              description:
                "Constantemente desenvolvemos novos sabores e técnicas para surpreender nossos clientes com criações únicas.",
            },
            {
              icon: "🤝",
              title: "Atendimento Personalizado",
              description:
                "Cada cliente é especial. Adaptamos nossos produtos às suas necessidades e preferências específicas.",
            },
            {
              icon: "🎨",
              title: "Arte Comestível",
              description:
                "Acreditamos que a beleza visual potencializa o prazer. Cada peça é uma obra de arte comestível.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-title text-[var(--color-primary)] mb-3">
                {value.title}
              </h3>
              <p className="text-[var(--color-foreground-dark)] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Differentials Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="bg-gradient-to-br from-[var(--color-support)] to-[var(--color-primary)]/10 rounded-3xl p-8 sm:p-12 mb-20"
      >
        <h2 className="text-3xl font-title text-[var(--color-ink)] text-center mb-10">
          O que nos torna únicos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Receitas Exclusivas",
              description:
                "Desenvolvemos nossas próprias receitas, equilibrando tradição e inovação para criar sabores memoráveis.",
            },
            {
              title: "Ingredientes Naturais",
              description:
                "Priorizamos produtos naturais, sem conservantes artificiais, valorizando o sabor autêntico dos alimentos.",
            },
            {
              title: "Produção Diária",
              description:
                "Tudo fresquinho! Produzimos diariamente para garantir máxima qualidade e frescor em cada entrega.",
            },
            {
              title: "Encomendas Personalizadas",
              description:
                "Criamos produtos sob medida para aniversários, casamentos, eventos corporativos e ocasiões especiais.",
            },
          ].map((differential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-title text-[var(--color-primary)] mb-2">
                  {differential.title}
                </h3>
                <p className="text-[var(--color-foreground-dark)] leading-relaxed">
                  {differential.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-title text-[var(--color-ink)] mb-6">
          Vamos adoçar seu dia?
        </h2>
        <p className="text-[var(--color-foreground-dark)] text-lg mb-8 max-w-2xl mx-auto">
          Entre em contato e descubra como podemos tornar seus momentos ainda
          mais especiais com nossas criações artesanais.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
            const message = encodeURIComponent(
              "Olá! Gostaria de conhecer mais sobre a daCoach Confeitaria."
            );
            window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
          }}
          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-10 py-4 rounded-xl font-title text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Fale Conosco pelo WhatsApp
        </motion.button>
      </motion.section>
    </main>
  );
}

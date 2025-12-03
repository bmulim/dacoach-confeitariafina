"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getBusinessHours, type BusinessHours } from "@/lib/store";

export default function ContactPage() {
  const [businessHours, setBusinessHours] = useState<BusinessHours>({
    weekday: "8h às 18h",
    saturday: "8h às 14h",
    sunday: "Fechado",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setBusinessHours(getBusinessHours());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\n` +
        `Email: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n\n` +
        `Mensagem: ${formData.message}`
    );
    window.open(`https://wa.me/${phone}?text=${whatsappMessage}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-title text-[var(--color-ink)] mb-4">
          Entre em Contato
        </h1>
        <p className="text-[var(--color-foreground-dark)] text-lg max-w-2xl mx-auto">
          Estamos prontos para atender você! Envie sua mensagem ou escolha uma
          das formas de contato abaixo.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto rounded-full mt-6" />
      </motion.section>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-title text-[var(--color-primary)] mb-6">
              Envie sua Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[var(--color-foreground-dark)] font-medium mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[var(--color-foreground-dark)] font-medium mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[var(--color-foreground-dark)] font-medium mb-2"
                >
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[var(--color-foreground-dark)] font-medium mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors resize-none"
                  placeholder="Como podemos ajudar você?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-4 rounded-xl font-title text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Enviar via WhatsApp
              </motion.button>
            </form>
          </div>
        </motion.section>

        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* WhatsApp Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-lg cursor-pointer"
            onClick={() => {
              const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
              window.open(`https://wa.me/${phone}`, "_blank");
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-title text-green-800 mb-2">
                  WhatsApp
                </h3>
                <p className="text-green-700 mb-3">
                  Fale conosco agora mesmo pelo WhatsApp para encomendas e
                  dúvidas.
                </p>
                <p className="text-green-900 font-medium">
                  Clique para conversar
                </p>
              </div>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-[var(--color-support)] to-[var(--color-primary)]/10 rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-title text-[var(--color-primary)] mb-2">
                  E-mail
                </h3>
                <p className="text-[var(--color-foreground-dark)] mb-3">
                  Envie um e-mail com sua dúvida ou encomenda.
                </p>
                <a
                  href="mailto:contato@dacoach.com.br"
                  className="text-[var(--color-primary)] font-medium hover:underline"
                >
                  contato@dacoach.com.br
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-[var(--color-support)] to-[var(--color-primary)]/10 rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[var(--color-secondary)] rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-title text-[var(--color-primary)] mb-2">
                  Localização
                </h3>
                <p className="text-[var(--color-foreground-dark)]">
                  Endereço da Confeitaria
                  <br />
                  Cidade, Estado - CEP
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-[var(--color-support)] to-[var(--color-primary)]/10 rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-title text-[var(--color-primary)] mb-2">
                  Horário de Atendimento
                </h3>
                <p className="text-[var(--color-foreground-dark)]">
                  Segunda a Sexta: {businessHours.weekday}
                  <br />
                  Sábado: {businessHours.saturday}
                  <br />
                  Domingo: {businessHours.sunday}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl"
      >
        <h2 className="text-3xl font-title text-[var(--color-ink)] text-center mb-10">
          Perguntas Frequentes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              question: "Como faço um pedido?",
              answer:
                "Entre em contato pelo WhatsApp, preencha o formulário ou envie um e-mail com os detalhes do produto desejado.",
            },
            {
              question: "Qual o prazo de entrega?",
              answer:
                "O prazo varia de acordo com o produto e quantidade. Geralmente entre 2 a 5 dias úteis para encomendas personalizadas.",
            },
            {
              question: "Vocês fazem entregas?",
              answer:
                "Sim! Realizamos entregas na região. Consulte as condições e taxas pelo WhatsApp.",
            },
            {
              question: "Posso retirar no local?",
              answer:
                "Sim! Você pode agendar a retirada em nosso endereço no horário de funcionamento.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="border-l-4 border-[var(--color-primary)] pl-4"
            >
              <h3 className="font-title text-lg text-[var(--color-primary)] mb-2">
                {faq.question}
              </h3>
              <p className="text-[var(--color-foreground-dark)]">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

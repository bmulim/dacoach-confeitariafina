"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";

export interface HeroProps {
  title: string;
  description?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  ctaHref?: string; // optional href for CTA (external links like WhatsApp)
  whatsappNumber?: string; // optional, e.g. '5511999999999'
  messageTemplate?: string; // message template, use {name} placeholder
  promptForName?: boolean; // if true, ask user for name before opening link
  imgSrc?: string; // decorative image
  imgAlt?: string;
  className?: string;
  titleClassName?: string;
  descClassName?: string;
  ctaClassName?: string;
  imgClassName?: string;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  description,
  ctaLabel,
  onCtaClick,
  ctaHref,
  whatsappNumber,
  messageTemplate,
  promptForName = false,
  imgSrc,
  imgAlt = "",
  className = "",
  titleClassName = "",
  descClassName = "",
  ctaClassName = "",
  imgClassName = "",
  children,
}: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitorName, setVisitorName] = useState("");

  function openWhatsApp(name = "") {
    const messageBase =
      messageTemplate ||
      "Olá, meu nome é {name}. Gostaria de pedir um orçamento.";
    const message = messageBase.replace("{name}", name || "");
    const encoded = encodeURIComponent(message);
    const number = whatsappNumber || "";
    const url = number
      ? `https://wa.me/${number}?text=${encoded}`
      : `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, "_blank");
  }

  function handleCtaClick() {
    if (promptForName) {
      setVisitorName("");
      setIsModalOpen(true);
      return;
    }
    openWhatsApp("");
  }

  return (
    <section className={`relative ${className}`} aria-label="Hero">
      <div className="relative z-10 text-center">
        <h1 className={titleClassName}>{title}</h1>
        {description && <p className={descClassName}>{description}</p>}
        {ctaLabel && (
          <div className="mt-4 flex justify-center">
            {whatsappNumber || messageTemplate ? (
              // render a button that opens modal or whatsapp directly
              <>
                <button className={ctaClassName} onClick={handleCtaClick}>
                  {ctaLabel}
                </button>

                <Modal
                  isOpen={isModalOpen}
                  title="Seu nome"
                  confirmLabel="Enviar"
                  cancelLabel="Cancelar"
                  onCancel={() => setIsModalOpen(false)}
                  onConfirm={() => {
                    const name = visitorName.trim();
                    if (!name) return; // don't proceed with empty name
                    setIsModalOpen(false);
                    openWhatsApp(name);
                  }}
                >
                  <label className="block text-sm text-gray-700 mb-2">
                    Por favor, informe seu nome:
                  </label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Seu nome"
                    autoFocus
                  />
                </Modal>
              </>
            ) : ctaHref ? (
              <Link
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClassName}
              >
                {ctaLabel}
              </Link>
            ) : (
              <button className={ctaClassName} onClick={onCtaClick}>
                {ctaLabel}
              </button>
            )}
          </div>
        )}
      </div>

      {imgSrc && (
        <div
          className={`pointer-events-none absolute ${imgClassName}`}
          aria-hidden
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={160}
            height={112}
            className="object-contain"
          />
        </div>
      )}

      {children}
    </section>
  );
}

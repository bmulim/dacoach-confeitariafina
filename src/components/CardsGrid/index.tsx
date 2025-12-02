"use client";

import React from "react";
import ServiceCard, { ServiceCardProps } from "../ServiceCard";

export interface CardsGridProps {
  items: Array<Pick<ServiceCardProps, "title" | "text" | "imgSrc" | "imgAlt">>;
  className?: string; // grid container
  cardProps?: Partial<ServiceCardProps>;
  cardClassName?: string;
}

export default function CardsGrid({
  items,
  className = "",
  cardProps = {},
  cardClassName = "",
}: CardsGridProps) {
  return (
    <section className={className} aria-label="Cards Grid">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <ServiceCard
            key={i}
            title={it.title}
            text={it.text}
            imgSrc={it.imgSrc}
            imgAlt={it.imgAlt}
            articleClassName={`bg-white rounded-2xl overflow-hidden shadow-md border border-[var(--color-border)] ${cardClassName}`}
            titleClassName="font-title text-xl text-[var(--color-ink)] font-semibold"
            textClassName="mt-2 text-sm text-[var(--color-foreground-dark)] leading-relaxed"
            {...cardProps}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";

export interface ServiceCardProps {
  title: string;
  text?: string;
  imgSrc?: string;
  imgAlt?: string;
  className?: string; // outer container
  articleClassName?: string; // article wrapper
  imgClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  onClick?: () => void;
}

export default function ServiceCard({
  title,
  text,
  imgSrc,
  imgAlt = "",
  className = "",
  articleClassName = "",
  imgClassName = "",
  titleClassName = "",
  textClassName = "",
  onClick,
}: ServiceCardProps) {
  return (
    <article
      className={`${articleClassName} ${className} transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-full h-44 md:h-56 bg-[var(--background-alt)] relative overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={imgAlt || title}
            fill
            className={`${imgClassName} object-cover`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-[var(--color-support)]" />
        )}
      </div>
      <div className="p-4">
        <h3 className={titleClassName}>{title}</h3>
        {text && <p className={textClassName}>{text}</p>}
      </div>
    </article>
  );
}

"use client";

import React from "react";
import Image from "next/image";
interface FigmaEmbedProps {
  title: string;
  src: string;
  imgSrc: string;
}

const FigmaEmbed: React.FC<FigmaEmbedProps> = ({ title, src, imgSrc }) => {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border block transition-all"
    >
      <h3 className="text-card-foreground mb-3 text-center">{title}</h3>
      <div className="relative aspect-video w-[calc(100vw-96px)] lg:w-[calc(40vw-48px)]">
        <Image src={imgSrc} alt={title} fill={true} className="rounded" />
      </div>
    </a>
  );
};

export default FigmaEmbed;

import React from "react";
import FigmaEmbed from "./FigmaEmbed";

const figmaProjects = [
  {
    title: "Kraken Dashboard",
    src: "https://embed.figma.com/proto/j1ShcFgBEKxahf4lDXLWzt/Kraken?node-id=4-3361&p=f&scaling=scale-down&content-scaling=fixed&page-id=4%3A3115&embed-host=share",
  },
  {
    title: "RoundHouse",
    src: "https://embed.figma.com/proto/Z3NCMH8aGZJ5MonmP8xueR/RoundHouse?node-id=73-800&p=f&scaling=scale-down&content-scaling=fixed&page-id=73%3A754&starting-point-node-id=73%3A755&embed-host=share",
  },
  {
    title: "SimSync",
    src: "https://embed.figma.com/proto/X1Lg8tYWjlNyuNo0dIvuqE/SimSync?node-id=1-173&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share",
  },
];

const FigmaShowcase = () => {
  return (
    <section className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
        Figma Projects
      </h2>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {figmaProjects.map((project) => (
          <FigmaEmbed
            key={project.title}
            title={project.title}
            src={project.src}
          />
        ))}
      </div>
    </section>
  );
};

export default FigmaShowcase;

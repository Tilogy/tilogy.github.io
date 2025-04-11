"use client";
import React from "react";
import FigmaEmbed from "@/components/figma/figma-embed";
import ScreenLayout from "@/components/layout/screen-layout";

const figmaProjects = [
  {
    title: "Kraken",
    src: "https://www.figma.com/proto/j1ShcFgBEKxahf4lDXLWzt/Kraken?node-id=4-3361&p=f&t=rGrdDJxHxOxwdcQe-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A3115",
    imgSrc: "images/kraken.png",
  },
  {
    title: "RoundHouse",
    src: "https://www.figma.com/proto/Z3NCMH8aGZJ5MonmP8xueR/RoundHouse?node-id=85-2&p=f&t=IoEhAkUgQ6mKwFlg-1&scaling=scale-down&content-scaling=fixed&page-id=73%3A754",
    imgSrc: "images/roundhouse.png",
  },
  {
    title: "SimSync",
    src: "https://www.figma.com/proto/X1Lg8tYWjlNyuNo0dIvuqE/SimSync?node-id=1-173&p=f&t=7zNG1IW7wBmH9MjL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    imgSrc: "images/simsync.png",
  },
];

const Projects = () => {
  const topLeftContent = <h2>Projects</h2>;
  const bottomLeftContent = null;

  const mainContent = (
    <div className="flex flex-row flex-wrap items-center justify-center gap-6">
      {figmaProjects.map((project) => (
        <FigmaEmbed
          key={project.title}
          title={project.title}
          src={project.src}
          imgSrc={project.imgSrc}
        />
      ))}
    </div>
  );

  return (
    <ScreenLayout
      topLeft={topLeftContent}
      bottomLeft={bottomLeftContent}
      anchorId="projects"
      previousSectionId="about"
      background="bg-(image:--linear-to-b)"
    >
      {mainContent}
    </ScreenLayout>
  );
};

export default Projects;

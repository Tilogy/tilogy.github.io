import React from "react";
import FigmaEmbed from "@/components/figma/figma-embed";
import ScreenLayout from "@/components/layout/screen-layout";

const figmaProjects = [
  {
    title: "Kraken Dashboard",
    src: "https://www.figma.com/proto/Ktd3i0liEiLUO6Pxz29zSQ/Kraken-Dashboard?node-id=257-2190&p=f&t=g1QlM380ugQq6gHp-1&scaling=scale-down&content-scaling=fixed&page-id=257%3A1083&starting-point-node-id=257%3A2190",
  },
  {
    title: "RoundHouse",
    src: "https://www.figma.com/proto/Z3NCMH8aGZJ5MonmP8xueR/RoundHouse?node-id=85-2&p=f&t=IoEhAkUgQ6mKwFlg-1&scaling=scale-down&content-scaling=fixed&page-id=73%3A754",
  },
  {
    title: "SimSync",
    src: "https://www.figma.com/proto/X1Lg8tYWjlNyuNo0dIvuqE/SimSync?node-id=1-173&p=f&t=7zNG1IW7wBmH9MjL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
];

const Projects = () => {
  const topLeftContent = <h2>Projects</h2>;
  const bottomLeftContent = null;

  const mainContent = (
    <div className="flex w-full max-w-7xl flex-col items-center px-4 py-16">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {figmaProjects.map((project) => (
          <FigmaEmbed
            key={project.title}
            title={project.title}
            src={project.src}
          />
        ))}
      </div>
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

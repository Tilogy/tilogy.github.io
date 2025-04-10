import React from "react";

interface FigmaEmbedProps {
  title: string;
  src: string;
}

const FigmaEmbed: React.FC<FigmaEmbedProps> = ({ title, src }) => {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border block transition-all"
    >
      <h3 className="text-card-foreground group-hover:text-primary mb-3 text-center text-xl font-semibold">
        {title}
      </h3>
      <div className="bg-muted text-muted-foreground flex aspect-video w-full items-center justify-center rounded">
        <span className="text-sm italic">Click to view project</span>
      </div>
    </a>
  );
};

export default FigmaEmbed;

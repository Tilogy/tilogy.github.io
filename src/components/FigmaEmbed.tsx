import React from "react";

interface FigmaEmbedProps {
  title: string;
  src: string;
}

const FigmaEmbed: React.FC<FigmaEmbedProps> = ({ title, src }) => {
  return (
    // Wrap the entire content in a link that opens in a new tab
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border bg-card block rounded-lg border p-4 shadow-sm transition-all hover:shadow-md"
    >
      <h3 className="text-card-foreground group-hover:text-primary mb-3 text-center text-xl font-semibold">
        {title}
      </h3>
      {/* Placeholder for the image */}
      <div className="bg-muted text-muted-foreground flex aspect-video w-full items-center justify-center rounded">
        <span className="text-sm italic">Click to view project</span>
        {/* In the future, replace this div with an <Image> component */}
      </div>
    </a>
  );
};

export default FigmaEmbed;

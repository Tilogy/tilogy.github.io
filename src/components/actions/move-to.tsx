"use client";

import React from "react";
import { MoveDown, MoveUp } from "lucide-react";

interface MoveToProps {
  href: string;
  direction: "up" | "down";
}

const MoveTo: React.FC<MoveToProps> = ({ href, direction }) => {
  const label = direction === "down" ? "Scroll down" : "Scroll up";

  return (
    <a
      href={href}
      aria-label={label}
      className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border-2 border-black bg-transparent p-1 transition-opacity hover:opacity-80 dark:border-white`}
    >
      {direction === "down" ? (
        <MoveDown className="h-6 w-6" />
      ) : (
        <MoveUp className="h-6 w-6" />
      )}
    </a>
  );
};

export default MoveTo;

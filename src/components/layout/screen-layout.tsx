import React from "react";
import LinkedInIcon from "@/components/actions/linkedin-icon";
import ThemeToggle from "@/components/actions/theme-toggle";
import MoveTo from "@/components/actions/move-to";

interface ScreenLayoutProps {
  topLeft: React.ReactNode;
  bottomLeft: React.ReactNode;
  children?: React.ReactNode;
  background?: string;
  anchorId?: string;
  nextSectionId?: string;
  previousSectionId?: string;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  topLeft,
  bottomLeft,
  children,
  background = "bg-background",
  anchorId,
  nextSectionId,
  previousSectionId,
}) => {
  return (
    <section
      id={anchorId}
      className={`${background} text-foreground relative flex h-screen items-center justify-center`}
    >
      <div className="absolute top-12 left-12 text-6xl">{topLeft}</div>
      <div className="absolute bottom-12 left-12 text-9xl">{bottomLeft}</div>
      <div className="absolute top-12 right-12 flex items-center gap-x-4">
        <ThemeToggle />
        <LinkedInIcon />
      </div>
      <div className="absolute right-12 bottom-12 flex items-center gap-x-4">
        {previousSectionId ? (
          <MoveTo href={`#${previousSectionId}`} direction="up" />
        ) : (
          <div className="h-9 w-9" />
        )}
        {nextSectionId ? (
          <MoveTo href={`#${nextSectionId}`} direction="down" />
        ) : (
          <div className="h-9 w-9" />
        )}
      </div>
      {children}
    </section>
  );
};

export default ScreenLayout;

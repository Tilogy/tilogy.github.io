"use client";
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
      className={`${background} text-foreground relative flex flex-col justify-between gap-6 lg:h-[var(--screen-layout-height)]`}
    >
      <div className="flex w-full flex-row items-start justify-between p-12">
        <div className="text-2xl font-thin md:text-6xl">{topLeft}</div>
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <LinkedInIcon />
        </div>
      </div>
      <div className="mx-12 font-light md:text-xl lg:text-2xl">{children}</div>
      <div className="flex w-full flex-row content-end items-end justify-between p-12">
        <div className="text-2xl font-light md:text-6xl lg:text-9xl">
          {bottomLeft}
        </div>
        <div className="hidden items-center gap-x-4 lg:flex">
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
      </div>
    </section>
  );
};

export default ScreenLayout;

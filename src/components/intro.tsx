"use client";
import React from "react";
import ScreenLayout from "@/components/layout/screen-layout";
const Intro = () => {
  const topLeftContent = <h2>Tiffany Sinakhot</h2>;
  const bottomLeftContent = (
    <div className="flex gap-2 lg:flex-col lg:gap-0">
      <span>CREATIVE</span>
      <span>PORTFOLIO</span>
    </div>
  );

  return (
    <ScreenLayout
      topLeft={topLeftContent}
      bottomLeft={bottomLeftContent}
      anchorId="intro"
      nextSectionId="about"
      background="bg-(image:--linear-to-b)"
    />
  );
};

export default Intro;

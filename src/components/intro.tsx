import React from "react";
import ScreenLayout from "@/components/layout/screen-layout"; // Updated import path

const Intro = () => {
  // Define the specific content for the Intro screen
  const topLeftContent = <h2>Tiffany Sinakhot</h2>;
  const bottomLeftContent = (
    <div className="flex flex-col">
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

"use client";
import React from "react";
import ScreenLayout from "@/components/layout/screen-layout";

const About = () => {
  const topLeftContent = <h2>About</h2>;

  const mainContent = (
    <div className="mx-auto max-w-4xl text-left">
      <p>
        I&apos;m a UX/UI Designer with over a decade of experience in visual
        design and a passion for creating intuitive, user-centered digital
        experiences. My journey began in graphic design, but my curiosity and
        love for solving real user problems led me to UX.
        <br />
        <br />
        I thrive on collaboration, accessibility, and clean, thoughtful designs.
        My goal? To design inclusive solutions that are as functional as they
        are beautiful.
        <br />
        <br />
        When I&apos;m not designing, I&apos;m diving into one of my many
        hobbies; drawing, painting, gaming, and dancing.
      </p>
    </div>
  );

  return (
    <ScreenLayout
      topLeft={topLeftContent}
      bottomLeft={null}
      anchorId="about"
      previousSectionId="intro"
      nextSectionId="projects"
      background="bg-(image:--linear-to-t)"
    >
      {mainContent}
    </ScreenLayout>
  );
};

export default About;

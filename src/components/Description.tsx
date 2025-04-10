import React from "react";

const Description = () => {
  return (
    <section className="bg-secondary text-secondary-foreground flex h-screen items-center justify-center">
      <div className="mx-auto max-w-4xl p-8 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          About Tilogy
        </h2>
        <p className="text-lg md:text-xl">
          {/* Add your description here */}
          Tilogy showcases a collection of innovative projects and designs.
          Explore the embedded Figma prototypes below to see some of the work in
          detail.
        </p>
      </div>
    </section>
  );
};

export default Description;

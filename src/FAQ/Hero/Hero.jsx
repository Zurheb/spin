import React from "react";

export const Hero = () => {
  return (
    <section>
    <div className="container mx-auto">
      <div
        className="w-full h-[450px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-center"
        style={{
          backgroundImage:
            "url(https://themewagon.gitlab.io/spin/assets/img/gallery/faq-banner-img.png)",
        }}
      >
        <h1 className="text-white text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-white text-lg mb-4">
          Want to find out more about Spin?
        </p>
        <p className="text-white text-lg mb-8">
          The answers to these and more can be found below.
        </p>
      </div>
    </div>
  </section>
  );
};

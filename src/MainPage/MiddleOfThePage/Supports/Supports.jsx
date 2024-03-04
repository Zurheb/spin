import { Button } from "@material-tailwind/react";
import React from "react";

export const Supports = () => {
  return (
    <section className="bg-black py-20 lg:py-32">
    <div className="container px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center flex flex-col  lg:text-left lg:w-1/2 lg:mr-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Set up your site, pick a plan later
          </h1>
          <p className="text-white mb-4">
            Try Spin free for 14 days, no credit card required. Enterprise-grade
            solutions for high traffic websites, and large businesses.
          </p>
          <Button
            variant="gradient"
            color="blue"
            className="h-12 lg:max-w-56 lg:h-16 rounded-none lg:rounded-lg lg:w-auto px-6 text-white bg-blue-500 hover:bg-blue-600"
          >
            <span>Get started - it's free</span>
          </Button>
        </div>
        <div className="flex justify-center  lg:justify-end lg:w-1/2 lg:ml-8 mt-8 lg:mt-0">
          <div>
            <h2 className="text-gray-500 text-center lg:text-left mb-4">
              TRANSFORMING THE DESIGN PROCESS AT
            </h2>
            <div className="grid grid-cols-4 gap-10">
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/15.png"
                alt="Logo 15"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/16.png"
                alt="Logo 16"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/17.png"
                alt="Logo 17"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/18.png"
                alt="Logo 18"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/19.png"
                alt="Logo 19"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/20.png"
                alt="Logo 20"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/21.png"
                alt="Logo 21"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/22.png"
                alt="Logo 22"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/23.png"
                alt="Logo 23"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/24.png"
                alt="Logo 24"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/25.png"
                alt="Logo 25"
              />
              <img
                src="https://themewagon.gitlab.io/spin/assets/img/logos/26.png"
                alt="Logo 26"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

import { Button } from "@material-tailwind/react";
import React from "react";

export const Hero = () => {
  return (
    <section>
      <div className="container">
       <div className="flex flex-col lg:flex-row items-center justify-between py-10 lg:py-20">
  <div className="lg:w-1/2 mb-10 lg:mb-0">
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <h1 className="w-full lg:max-w-[450px] text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
        Design & Build Better Together.
      </h1>
      <p className=" w-full lg:max-w-[500px] text-base lg:text-lg text-gray-700 mb-6">
        Manipulate and test the actual thing, together in real time,
        visually and in-context.
      </p>
      <div className="flex justify-center lg:justify-start">
        <Button
          variant="gradient"
          color="blue"
          fullWidth={true}
          className="h-12 lg:h-16 rounded-none lg:rounded-lg lg:w-auto px-6 text-white bg-blue-500 hover:bg-blue-600"
        >
          <span>Get started - it's free</span>
        </Button>
      </div>
    </div>
  </div>
  <div className="lg:w-1/2">
    <img
      className="rounded-lg shadow-lg w-full"
      src="https://themewagon.gitlab.io/spin/assets/img/gallery/banner-image.jpg"
      alt="Banner"
    />
  </div>
</div>

        <div className=" mx-auto py-10">
          <div className="grid grid-cols-4 gap-10 lg:grid-cols-8 lg:gap-4">
            <img
              src="https://themewagon.gitlab.io/spin/assets/img/logos/1.png"
              alt=""
              className="w-full"
            />
            <img
              src="https://themewagon.gitlab.io/spin/assets/img/logos/2.png"
              alt=""
              className="w-full"
            />
            <img
              src="https://themewagon.gitlab.io/spin/assets/img/logos/3.png"
              alt=""
              className="w-full"
            />
            <img
              src="https://themewagon.gitlab.io/spin/assets/img/logos/5.png"
              alt=""
              className="w-full"
            />
            <img
              src="https://themewagon.gitlab.io/spin/assets/img/logos/7.png"
              alt=""
              className="w-full"
            />
            <img
              src="https://themewagon.gitlab.io/spin/assets/img/logos/8.png"
              alt=""
              className="w-full"
            />
            <img
              src="https://themewagon.gitlab.io/spin/assets/img/logos/9.png"
              alt=""
              className="w-full"
            />
            <img
              src="https://themewagon.gitlab.io/spin/assets/img/logos/10.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

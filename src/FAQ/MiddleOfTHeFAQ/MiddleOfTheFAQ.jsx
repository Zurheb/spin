import { Button } from "@material-tailwind/react";
import React from "react";
import { AccordionCustomIcon } from "./According/Accoding";

export const MiddleOfTheFAQ = () => {
  return (
    <section className="py-24 container mx-auto">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col gap-3 items-center">
          <h4 className="text-2xl lg:text-3xl text-center">
            Use Spin's diverse layouts to create
          </h4>
          <p className="font-bold text-2xl lg:text-3xl text-center">
            beautiful experiences.
          </p>
          <Button
            variant="gradient"
            color="blue"
            fullWidth={true}
            className="h-12 lg:h-16 rounded-lg lg:w-auto px-6 text-white bg-blue-500 hover:bg-blue-600"
          >
            <span>Get started free</span>
          </Button>
        </div>
        <div>
          <div className="">
            <iframe
              title="YouTube video player"
              className="lg:w-[640px] lg:h-[360px] md:w-[540px] md:h-[300px] sm:w-[300px] "
              src="https://www.youtube.com/embed/gCrHFJI2aFU?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fthemewagon.gitlab.io&widgetid=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="max-w-[640px]">
          <AccordionCustomIcon />
        </div>
      </div>
    </section>
  );
};

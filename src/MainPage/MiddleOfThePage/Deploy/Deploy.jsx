import { Carousel } from "@material-tailwind/react";
import React from "react";

export const Deploy = () => {
  return (
    <section className="py-12 container">
      <div
        className="mx-auto px-4 bg-cover p-20"
        style={{
          backgroundImage:
            "url(https://themewagon.gitlab.io/spin/assets/img/gallery/bg-img-3-sec.jpg)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <div className="bg-white flex flex-col gap-5 shadow-lg rounded-lg p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Deploy</h1>
              <div className="">
                <img
                  className="w-40"
                  src="https://themewagon.gitlab.io/spin/assets/img/logos/6.png"
                  alt="Logo"
                />
              </div>
              <p className="text-gray-700 ">
                Spin is fast. Files are always up to date. It’s easy to share
                designs across the organization, so collaboration is easy.
              </p>
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://themewagon.gitlab.io/spin/assets/img/team/qouta-avatar-img2.jpg"
                  alt="Avatar"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">Jason Green</h2>
                  <p className="text-gray-600">SR. DESIGNER</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Carousel 
              className="rounded-xl"
              autoplay={true}
              loop={true}
              >
                <img
                  src="https://themewagon.gitlab.io/spin/assets/img/gallery/slide-1.jpg"
                  alt="Image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://themewagon.gitlab.io/spin/assets/img/gallery/slide-2.png"
                  alt="Image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://themewagon.gitlab.io/spin/assets/img/gallery/slide-3.jpg"
                  alt="Image 3"
                  className="h-full w-full object-cover"
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 gap-8">
          <div className="max-w-sm text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              Natively integrated
            </h2>
            <p className="text-gray-700">
              Monitor system-level metrics in the same place you manage your
              infrastructure – at no additional cost.
            </p>
          </div>
          <div className="max-w-sm text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              Resource metrics
            </h2>
            <p className="text-gray-700">
              View summary stats and time series graphs of resource usage for
              your Kubernetes cluster, database.
            </p>
          </div>
          <div className="max-w-sm text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              Real-time alerts
            </h2>
            <p className="text-gray-700">
              Receive alerts via Slack or email whenever a metric crosses your
              specified threshold and critical issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

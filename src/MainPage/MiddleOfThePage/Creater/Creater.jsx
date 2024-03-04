import React from 'react'

export const Creater = () => {
  return (
    <section className="py-12 container">
      <div
        className="mx-auto  px-4 bg-cover p-20"
        style={{
          backgroundImage:
            "url(https://themewagon.gitlab.io/spin/assets/img/gallery/bg-img-2-sec.jpg)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <div className="bg-white flex flex-col gap-5 shadow-lg rounded-lg p-8  h-full">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Create</h1>
              <div className="">
                <img
                  className="w-40"
                  src="https://themewagon.gitlab.io/spin/assets/img/logos/12.png"
                  alt="Logo"
                />
              </div>
              <p className="text-gray-700 mb-4">
                We’ve saved hours on every project with Spin, and the amount of
                time we’ve saved scales directly with the size of the project -
                the bigger the project, the more time we save with it.
              </p>
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://themewagon.gitlab.io/spin/assets/img/team/qouta-avatar-img.jpg"
                  alt="Avatar"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">Dues Stark</h2>
                  <p className="text-gray-600">ART DIRECTOR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <div className="bg-white shadow-lg  rounded-lg  overflow-hidden h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full  "
              >
                <source
                  src="https://themewagon.gitlab.io/spin/assets/video/bg-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 gap-8">
          <div className="max-w-sm text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              Prototyping
            </h2>
            <p className="text-gray-700">
              Bring your ideas to life faster in animated prototypes that feel
              like the real thing.
            </p>
          </div>
          <div className="max-w-sm text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              Collaboration
            </h2>
            <p className="text-gray-700">
              Share a link to your design files or prototypes, and get feedback
              in context.
            </p>
          </div>
          <div className="max-w-sm text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              Design Systems
            </h2>
            <p className="text-gray-700">
              Create a scalable design system that’s accessible and easy for you
              to manage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

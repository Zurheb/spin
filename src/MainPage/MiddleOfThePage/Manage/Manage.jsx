import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Manage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once
      easing: 'ease-in-out', // Animation easing
      // Add more options as needed
    });
  }, []);
  return (
    <section className="py-12 container">
      <div
        className="mx-auto px-4 bg-cover p-20"
        style={{
          backgroundImage:
            "url(https://themewagon.gitlab.io/spin/assets/img/gallery/bg-img-4-sec.jpg)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <div data-aos="fade-up" className="bg-white flex flex-col gap-5 shadow-lg rounded-lg p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Manage</h1>
              <div className="">
                <img
                  className="w-40"
                  src="https://themewagon.gitlab.io/spin/assets/img/logos/14.png"
                  alt="Logo"
                />
              </div>
              <p className="text-gray-700 mb-4">
                We’ve been able to build something in 3 years that a lot of
                brands haven’t actually gotten to in 10 years.
              </p>
              <div  className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://themewagon.gitlab.io/spin/assets/img/team/qouta-avatar-img3.jpg"
                  alt="Avatar"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">Kate Winslet</h2>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <img
              src="https://themewagon.gitlab.io/spin/assets/img/gallery/homepage-3rdsec-img.jpg"
              alt="Background Image"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 justify-center mt-12 gap-8">
          <div data-aos="fade-right" className="max-w-sm text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-2">Award-winning support</h2>
            <p className="text-gray-700">
              This is the place to start. Find the answers you need from the
              Spin Community or our award-winning support team.
            </p>
          </div>
          <div data-aos="fade-up" className="max-w-sm text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-2">Spin App Store</h2>
            <p className="text-gray-700">
              Add features and functionality to your business with 2,500+ apps
              that integrate directly with Spin.
            </p>
          </div>
          <div data-aos="fade-left" className="max-w-sm text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-2">Spin Experts</h2>
            <p className="text-gray-700">
              Hire trusted experts to help build your business. From Landing
              Pages to WebApp, find freelancers to get the job done.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

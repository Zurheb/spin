import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Documintation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once
      easing: 'ease-in-out', // Animation easing
      // Add more options as needed
    });
  }, []);
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-left flex flex-col gap-3 mb-12">
          <p className="text-lg font-bold text-gray-600">DOCUMENTATION</p>
          <h1 className=" text-3xl  md:text-5xl font-bold  mb-4">
            Deploy and scale seamlessly
          </h1>
          <p className=" max-w-96 text-lg  text-gray-700">
            Spin helps teams create, test, and ship better designs from start to
            finish. Our optimized code base saves your team time when designing
            and coding static websites or landing pages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div data-aos="fade-up" className="rounded-lg  overflow-hidden shadow-lg bg-gradient-to-tr from-blue-300 to-pink-50 p-6 hover:shadow-2xl">
            <svg
              className="w-12 h-12  mx-auto lg:mx-0 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M21 10.0005C21.1313 10.0005 21.2614 9.97468 21.3827 9.92444C21.5041 9.87419 21.6143 9.80053 21.7072 9.70767C21.8 9.6148 21.8737 9.50455 21.9239 9.38321C21.9742 9.26187 22 9.13182 22 9.00049V6.00049C22.0001 5.79066 21.9341 5.58614 21.8114 5.41593C21.6887 5.24572 21.5155 5.11848 21.3164 5.05225L12.3164 2.05225C12.111 1.98389 11.889 1.98389 11.6836 2.05225L2.68359 5.05225C2.48449 5.11848 2.31131 5.24572 2.18861 5.41593C2.0659 5.58614 1.99991 5.79066 2 6.00049V9.00049C1.99997 9.13182 2.02581 9.26187 2.07605 9.38321C2.12629 9.50455 2.19995 9.6148 2.29282 9.70767C2.38568 9.80053 2.49594 9.87419 2.61728 9.92444C2.73862 9.97468 2.86867 10.0005 3 10.0005H4V17.1848C3.41674 17.3902 2.91137 17.7712 2.55327 18.2753C2.19517 18.7795 2.0019 19.3821 2 20.0005V22.0005C1.99997 22.1318 2.02581 22.2619 2.07605 22.3832C2.12629 22.5046 2.19995 22.6148 2.29282 22.7077C2.38568 22.8005 2.49594 22.8742 2.61728 22.9244C2.73862 22.9747 2.86867 23.0005 3 23.0005H21C21.1313 23.0005 21.2614 22.9747 21.3827 22.9244C21.5041 22.8742 21.6143 22.8005 21.7072 22.7077C21.8 22.6148 21.8737 22.5046 21.9239 22.3832C21.9742 22.2619 22 22.1318 22 22.0005V20.0005C21.9981 19.3821 21.8048 18.7795 21.4467 18.2753C21.0886 17.7712 20.5833 17.3902 20 17.1848V10.0005H21ZM20 21.0005H4V20.0005C4.00026 19.7354 4.10571 19.4812 4.29319 19.2937C4.48066 19.1062 4.73486 19.0008 5 19.0005H19C19.2651 19.0008 19.5193 19.1062 19.7068 19.2937C19.8943 19.4812 19.9997 19.7354 20 20.0005V21.0005ZM6 17.0005V10.0005H8V17.0005H6ZM10 17.0005V10.0005H14V17.0005H10ZM16 17.0005V10.0005H18V17.0005H16ZM4 8.00049V6.72119L12 4.05419L20 6.72119V8.00049H4Z"
                fill="#000000"
              />
            </svg>
            <h3 className="text-xl text-center lg:text-start font-bold text-white mb-2">Knowledge</h3>
            <p className="text-white text-center lg:text-start">
              A knowledge base is a technology used to store complex structured
              and unstructured information.
            </p>
          </div>

          <div data-aos="fade-up" className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-tr from-blue-300 to-pink-50 p-6 hover:shadow-2xl">
            <svg
              className="w-12 h-12 mx-auto lg:mx-0  mb-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M21 10.0005C21.1313 10.0005 21.2614 9.97468 21.3827 9.92444C21.5041 9.87419 21.6143 9.80053 21.7072 9.70767C21.8 9.6148 21.8737 9.50455 21.9239 9.38321C21.9742 9.26187 22 9.13182 22 9.00049V6.00049C22.0001 5.79066 21.9341 5.58614 21.8114 5.41593C21.6887 5.24572 21.5155 5.11848 21.3164 5.05225L12.3164 2.05225C12.111 1.98389 11.889 1.98389 11.6836 2.05225L2.68359 5.05225C2.48449 5.11848 2.31131 5.24572 2.18861 5.41593C2.0659 5.58614 1.99991 5.79066 2 6.00049V9.00049C1.99997 9.13182 2.02581 9.26187 2.07605 9.38321C2.12629 9.50455 2.19995 9.6148 2.29282 9.70767C2.38568 9.80053 2.49594 9.87419 2.61728 9.92444C2.73862 9.97468 2.86867 10.0005 3 10.0005H4V17.1848C3.41674 17.3902 2.91137 17.7712 2.55327 18.2753C2.19517 18.7795 2.0019 19.3821 2 20.0005V22.0005C1.99997 22.1318 2.02581 22.2619 2.07605 22.3832C2.12629 22.5046 2.19995 22.6148 2.29282 22.7077C2.38568 22.8005 2.49594 22.8742 2.61728 22.9244C2.73862 22.9747 2.86867 23.0005 3 23.0005H21C21.1313 23.0005 21.2614 22.9747 21.3827 22.9244C21.5041 22.8742 21.6143 22.8005 21.7072 22.7077C21.8 22.6148 21.8737 22.5046 21.9239 22.3832C21.9742 22.2619 22 22.1318 22 22.0005V20.0005C21.9981 19.3821 21.8048 18.7795 21.4467 18.2753C21.0886 17.7712 20.5833 17.3902 20 17.1848V10.0005H21ZM20 21.0005H4V20.0005C4.00026 19.7354 4.10571 19.4812 4.29319 19.2937C4.48066 19.1062 4.73486 19.0008 5 19.0005H19C19.2651 19.0008 19.5193 19.1062 19.7068 19.2937C19.8943 19.4812 19.9997 19.7354 20 20.0005V21.0005ZM6 17.0005V10.0005H8V17.0005H6ZM10 17.0005V10.0005H14V17.0005H10ZM16 17.0005V10.0005H18V17.0005H16ZM4 8.00049V6.72119L12 4.05419L20 6.72119V8.00049H4Z"
                fill="#000000"
              />
            </svg>
            <h3 className="text-xl text-center lg:text-start font-bold text-white mb-2">Forum</h3>
            <p className="text-white text-center lg:text-start">
              An Internet forum is a platform where people can communicate in
              the form of posted messages.
            </p>
          </div>

          <div data-aos="fade-up" className="rounded-lg  overflow-hidden shadow-lg bg-gradient-to-tr from-blue-300 to-pink-50 p-6 hover:shadow-2xl">
            <svg
              className="w-12 h-12 mx-auto lg:mx-0 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M21 10.0005C21.1313 10.0005 21.2614 9.97468 21.3827 9.92444C21.5041 9.87419 21.6143 9.80053 21.7072 9.70767C21.8 9.6148 21.8737 9.50455 21.9239 9.38321C21.9742 9.26187 22 9.13182 22 9.00049V6.00049C22.0001 5.79066 21.9341 5.58614 21.8114 5.41593C21.6887 5.24572 21.5155 5.11848 21.3164 5.05225L12.3164 2.05225C12.111 1.98389 11.889 1.98389 11.6836 2.05225L2.68359 5.05225C2.48449 5.11848 2.31131 5.24572 2.18861 5.41593C2.0659 5.58614 1.99991 5.79066 2 6.00049V9.00049C1.99997 9.13182 2.02581 9.26187 2.07605 9.38321C2.12629 9.50455 2.19995 9.6148 2.29282 9.70767C2.38568 9.80053 2.49594 9.87419 2.61728 9.92444C2.73862 9.97468 2.86867 10.0005 3 10.0005H4V17.1848C3.41674 17.3902 2.91137 17.7712 2.55327 18.2753C2.19517 18.7795 2.0019 19.3821 2 20.0005V22.0005C1.99997 22.1318 2.02581 22.2619 2.07605 22.3832C2.12629 22.5046 2.19995 22.6148 2.29282 22.7077C2.38568 22.8005 2.49594 22.8742 2.61728 22.9244C2.73862 22.9747 2.86867 23.0005 3 23.0005H21C21.1313 23.0005 21.2614 22.9747 21.3827 22.9244C21.5041 22.8742 21.6143 22.8005 21.7072 22.7077C21.8 22.6148 21.8737 22.5046 21.9239 22.3832C21.9742 22.2619 22 22.1318 22 22.0005V20.0005C21.9981 19.3821 21.8048 18.7795 21.4467 18.2753C21.0886 17.7712 20.5833 17.3902 20 17.1848V10.0005H21ZM20 21.0005H4V20.0005C4.00026 19.7354 4.10571 19.4812 4.29319 19.2937C4.48066 19.1062 4.73486 19.0008 5 19.0005H19C19.2651 19.0008 19.5193 19.1062 19.7068 19.2937C19.8943 19.4812 19.9997 19.7354 20 20.0005V21.0005ZM6 17.0005V10.0005H8V17.0005H6ZM10 17.0005V10.0005H14V17.0005H10ZM16 17.0005V10.0005H18V17.0005H16ZM4 8.00049V6.72119L12 4.05419L20 6.72119V8.00049H4Z"
                fill="#000000"
              />
            </svg>
            <h3 className="text-xl font-bold text-center lg:text-start text-white mb-2">Examples</h3>
            <p className="text-white text-center lg:text-start">
              Spin expo. Beautiful and inspiring uses of Spin, curated by
              ThemeWagon team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

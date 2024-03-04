import React from "react";

export const Color = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className=" shadow-lg rounded-lg bg-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-4">Colors</h1>
          <p className="text-gray-600 mb-4">
            Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
          </p>
          <span className="text-blue-500 border-blue-900 hover:text-blue-900 hover:border-b">Colors on Bootstrap</span>
        </div>
        <div className="mt-8 shadow-lg bg-gray-100 rounded-lg p-10">
          <h1 className="text-2xl font-bold mb-4">Theme colors</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            <div className="bg-blue-600 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-primary</p> <p>.bg-primary</p>
            </div>
            <div className="bg-gray-600 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-secondary </p> <p>.bg-secondary</p>
            </div>
            <div className="bg-green-500 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-success</p> <p>.bg-success</p>
            </div>
            <div className="bg-blue-300 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-info</p> <p>.bg-info</p>
            </div>
            <div className="bg-amber-600 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-warning</p> <p>.bg-warning</p>
            </div>
            <div className="bg-red-800 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-danger</p> <p>.bg-danger</p>
            </div>
            <div className="bg-white p-[75px] flex-col text-center items-center">
              <p>.text-light</p> <p>.bg-light</p>
            </div>
            <div className="bg-black text-white p-[75px]  flex-col text-center items-center">
              <p>.text-dark</p> <p>.bg-dark</p>
            </div>
          </div>
        </div>
        <div className="mt-8 shadow-lg bg-gray-100 rounded-lg p-10">
          <h1 className="text-2xl font-bold mb-4">Gray shades</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            <div className="bg-black text-white p-[75px]  flex-col text-center items-center">
              <p>.text-black</p>
              <p>.bg-black</p>
            </div>
            <div className="bg-blue-gray-900 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-1100 </p> <p>.bg-1000</p>
            </div>
            <div className="bg-blue-gray-800 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-1000</p> <p>.bg-1000</p>
            </div>
            <div className="bg-blue-gray-700 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-900</p> <p>.bg-900</p>
            </div>
            <div className="bg-blue-gray-600 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-800</p> <p>.bg-800</p>
            </div>
            <div className="bg-blue-gray-500 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-800</p> <p>.bg-800</p>
            </div>
            <div className="bg-blue-gray-400 text-white p-[75px] flex-col text-center items-center">
              <p>.text-700</p> <p>.bg-700</p>
            </div>
            <div className="bg-blue-gray-300 text-white p-[75px]  flex-col text-center items-center">
              <p>.text-600</p> <p>.bg-600</p>
            </div>
            <div className="bg-blue-gray-200 text-black p-[75px]  flex-col text-center items-center">
              <p>.text-500</p> <p>.bg-500</p>
            </div>
            <div className="bg-blue-gray-100 text-black p-[75px]  flex-col text-center items-center">
              <p>.text-400</p> <p>.bg-400</p>
            </div>
            <div className="bg-blue-gray-200 text-black p-[75px]  flex-col text-center items-center">
              <p>.text-300</p> <p>.bg-300</p>
            </div>
            <div className="bg-blue-gray-100 text-black p-[75px]  flex-col text-center items-center">
              <p>.text-200</p> <p>.bg-200</p>
            </div>
            <div className="bg-white text-black p-[75px]  flex-col text-center items-center">
              <p>.text-100</p> <p>.bg-100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

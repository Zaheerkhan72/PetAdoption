"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const petList = () => {
  const [pet, setPet] = useState({});

  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5000/pet/getall");

      console.log(res.status);

      const data = res.data; // Axios automatically parses the JSON response
      console.log(data);

      if (res.status === 200) {
        setPet(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const displayPet = () => {
    return (
      <section className="container mx-auto p-5 md:py-5 px-0 md:p-8 md:px-0 my-20">
        <section className="p-2 md:p-0 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 items-start ">
          {pet.length > 0 ? (
            pet.map((obj) => {
              return (
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  {/* <img
                    className="w-full"
                    src="/img/card-top.jpg"
                    alt="Sunset in the mountains"
                  /> */}
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {obj.breed}
                    </div>
                    <p className="text-gray-700 text-base">
                      {obj.color}
                    </p>
                    <p className="text-gray-700 text-base">
                      {obj.age}
                    </p>
                  </div>
                  
                </div>
              );
            })
          ) : (
            <div className="text-center text-3xl font-bold text-red-300 my-48">
              No Products Found
            </div>
          )}
        </section>
      </section>
    );
  };
  return (
    <div>
      <>
        {/* Hero */}
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8     pb-10">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <a
                className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300"
                href="#"
              >
                PRO release - Join to waitlist
                <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            </div>
            {/* End Announcement Banner */}
            {/* Title */}
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                Let's Build
                <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                  Together
                </span>
              </h1>
            </div>
            {/* End Title */}
            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-600">
                Preline UI is an open-source set of prebuilt UI components,
                ready-to-use examples and Figma design system based on the
                utility-first Tailwind CSS framework.
              </p>
            </div>

            <div className="mt-6 flex mx-auto max-w-md gap-x-4">
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white bg-sky-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* End Hero */}
      </>
      <div>{displayPet()}</div>
    </div>
  );
};

export default petList;

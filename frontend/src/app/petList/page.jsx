"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/navbar";

const PetList = () => {
  const [pet, setPet] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filteredPets, setFilteredPets] = useState([]); // State for filtered pets

  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5000/pet/getall");

      console.log(res.status);

      const data = res.data; // Axios automatically parses the JSON response
      console.log(data);

      if (res.status === 200) {
        setPet(data);
        setFilteredPets(data); // Initialize filtered pets
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    const results = pet.filter(
      (p) => p.breed && p.breed.toLowerCase().includes(searchQuery.toLowerCase()) // Add null/undefined check for breed
    );
    setFilteredPets(results);
  }, [searchQuery, pet]);

  const displayPet = () => {
    return (
      <section className="container mx-auto p-5 md:py-5 px-0 md:p-8 md:px-0 my-10">
        <section className="p-2 md:p-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
          {Array.isArray(filteredPets) && filteredPets.length > 0 ? (
            filteredPets.map((obj) => (
              <div
                key={obj._id}
                className="max-w-sm rounded flex overflow-hidden shadow-lg bg-white"
              >

                <div className="relative  w-36  overflow-hidden">
                  <img
                    className="object-cover "
                    src={"http://localhost:5000/" + obj.image}
                    alt="Pet Image"
                  />

                 
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{obj.breed}</div>
                  <p className="text-gray-700 text-base">Color: {obj.color}</p>
                  <p className="text-gray-700 text-base">Age: {obj.age}</p>
                  <div className="flex items-center justify-between mt-4">
                    <Link href={"/petdetails/" + obj._id} className="text-blue-500 font-bold text-lg">
                      Adopt Me!
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-3xl font-bold text-red-300 my-48">
              No Pets Found
            </div>
          )}
        </section>
      </section>
    );
  };

  return (
    <div>
      <Navbar />
      {/* Hero */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
    
         
          {/* Search Bar */}
          <div className="mt-6 flex mx-auto max-w-md">
            <input
              type="text"
              placeholder="Search by breed"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
      {/* End Hero */}
      <div>{displayPet()}</div>
    </div>
  );
};

export default PetList;

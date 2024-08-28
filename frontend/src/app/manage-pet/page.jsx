"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/navbar";

const ManagePets = () => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      const res = await axios.get("http://localhost:5000/pet/getall");

      if (res.status === 200) {
        setPets(res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const deletePet = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/pet/delete/${id}`);
      setPets(pets.filter((pet) => pet._id !== id));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold">Manage Pets</h1>
          {/* Add Pet Button */}
          <Link
            href="/addpet" // Update this path based on your routing setup
            className="bg-indigo-500 text-white px-4 py-2 rounded shadow hover:bg-indigo-600 transition duration-200"
          >
            Add Pet
          </Link>
        </div>
        {/* Pets List */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.length > 0 ? (
            pets.map((pet) => (
              <div key={pet._id} className="bg-white p-4 rounded shadow-lg">
              
                <img
                  className="w-full h-48 object-cover rounded mb-4"
                  src={`http://localhost:5000/${pet.image}`}
                  alt={pet.breed}
                />
                <div className="grid grid-cols-2">
                 <div>
                <h2 className="text-xl font-bold">{pet.breed}</h2>
                <p className="text-gray-700">Color: {pet.color}</p>
                <p className="text-gray-700">Age: {pet.age}</p>
                </div>
                <div className="">
                <button
                    onClick={() => deletePet(pet._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                  </div>
                  </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No pets available.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ManagePets;

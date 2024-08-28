'use client'
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Pet = () => {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState(null);

  const fetchProductData = async () => {
    try {
      const response = await fetch('http://localhost:5000/pet/getbyid/' + id);
      const data = await response.json();
      setPetDetails(data);
    } catch (err) {
      console.error("Error fetching pet details:", err);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  const displayProduct = () => {
    if (petDetails) {
      return (
        <div className="container mx-auto  p-24">
          <div className="lg:flex lg:justify-between">
            {/* Image Section */}
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <img
                alt="Pet Image"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                src={'http://localhost:5000/' + petDetails.image}
              />
            </div>

            {/* Details Section */}
            <div className="lg:w-2/3 lg:pl-8">
              <h2 className="text-gray-500 text-sm uppercase tracking-wider">Pet Details</h2>
              <h1 className="text-gray-900 text-3xl font-semibold mt-2 mb-4">{petDetails.type}</h1>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Age:</strong> {petDetails.age} years
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Breed:</strong> {petDetails.breed}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Color:</strong> {petDetails.color}
              </p>
            <Link href="/adopt-form" className="bg-blue-600 px-3 py-1 text-white rounded-lg">Adopt</Link>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="text-center text-gray-600 text-lg">Loading...</div>;
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen">
      {displayProduct()}
    </section>
  );
};

export default Pet;

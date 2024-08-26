import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const PetDetails = () => {
  const router = useRouter();
  const { id } = useParams;
  const [pet, setPet] = useState(null);

  useEffect(() => {
    if (id) {
      fetchPetDetails(id);
    }
  }, [id]);

  const fetchPetDetails = async (petId) => {
    try {
      const res = await axios.get(`http://localhost:5000/pet/getbyid/${petId}`);
      if (res.status === 200) {
        setPet(res.data);
      }
    } catch (error) {
      console.error("Error fetching pet details:", error);
    }
  };

  if (!pet) {
    return (
      <div className="container mx-auto text-center my-20">
        <p className="text-lg text-gray-600">Loading pet details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-20 p-5">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            {/* Example placeholder image, replace with actual image if available */}
            <img
              className="h-48 w-full object-cover md:w-48"
              src="/img/card-top.jpg"
              alt={pet.breed}
            />
          </div>
          <div className="p-8">
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              {pet.breed}
            </h1>
            <p className="mt-2 text-gray-500">Color: {pet.color}</p>
            <p className="mt-2 text-gray-500">Age: {pet.age}</p>
            <p className="mt-2 text-gray-500">Description: {pet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;

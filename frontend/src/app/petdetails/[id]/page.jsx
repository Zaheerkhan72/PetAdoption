<<<<<<< HEAD
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
=======
'use client'
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


const PetDetails = () => {

  const { id } = useParams();
  const [petDetails, setpetDetails] = useState(null);
  // console.log(id);


  const fetchProductData = () => {
    fetch('http://localhost:5000/pet/getbyid/' + id)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setpetDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  const displayProduct = () => {
    if (petDetails !== null) {
      return <div className="container  px-5 py-24 mx-auto">
        <div className="lg:w-4/5 grid grid-cols-3 mx-auto flex flex-wrap">
         <div className="col-span-1 my-auto block">
         <img
            alt="ecommerce"
            className=" w-full h-auto  object-cover object-center rounded border border-gray-200"
            src={'http://localhost:5000/' + petDetails.image}
          />
         </div>
         
          <div className="lg:w-1/2 col-span-2 py-auto block w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
           
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {petDetails.type}
            </h1>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {petDetails.breed}
            </h1>
          
            <p className="leading-relaxed mb-5">
              {petDetails.color}
            </p>
         
           
          </div>
        </div>
      </div>
    } else {
      return <p>Loading ...</p>
    }
  }


  return (
    <>

      {/* component */}
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        {displayProduct()}
      </section>

    </>
  );
};

export default PetDetails;
>>>>>>> b3b3f5d8dfbfd0f599329c60a264f41d88148629

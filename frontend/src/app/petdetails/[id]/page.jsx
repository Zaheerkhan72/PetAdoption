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
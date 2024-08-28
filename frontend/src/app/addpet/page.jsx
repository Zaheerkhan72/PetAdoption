"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddPet = () => {
  const router = useRouter()
  const [selFile, setSelFile] = useState("");

  const petForm = useFormik({
    initialValues: {
      type: "dog",
      breed: "",
      image: "",
      color: "",
      age: 0,
    },

    onSubmit: async (values,action) => {
      values.image = selFile;
      console.log(values);
      const res = await fetch("http://localhost:5000/pet/add", {
        method: "POST" ,
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json"},
      });
      console.log(res.status);
      action.resetForm();
      if (res.status === 200) {
        toast.success("Item uploaded successfully",);
        router.push("/petList")
      }
      else{
      toast.error("Something went wrong")
       
      }
    },
   
  
  });
  
  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append('myfile',file);
  
    const res = await fetch('http://localhost:5000/util/uploadfile',{
      method: 'POST',
      body: fd
    })
    console.log(res.status);
  }
  return (
    <>
    <Navbar />
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.pinimg.com/564x/92/90/c5/9290c5b8372a1ecfb2bd8adb38d74851.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-md mx-24  p-6 bg-transparent  rounded-xl text-white z-10">
        <h1 className="text-3xl font-bold text-center   mb-6">Add New Pet</h1>
        <form onSubmit={petForm.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="type" className="block text-sm font-medium  ">Pet Type</label>
            <select
              id="type"
              onChange={petForm.handleChange}
              value={petForm.values.type}
              className="mt-1 py-2 px-3 bg-[#99AABB]  block w-full   rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="snake">Snake</option>
              <option value="rabbit">Rabbit</option>
            </select>
          </div>

          <div>
            <label htmlFor="breed" className="block text-sm font-medium  ">Pet Breed</label>
            <input
              type="text"
              id="breed"
              onChange={petForm.handleChange}
              value={petForm.values.breed}
              className="mt-1 py-2 px-3 block w-full bg-[#99AABB] rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium  ">Pet Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={uploadFile}
              className="mt-1 py-2 px-3 block w-full bg-[#99AABB] rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
            {selFile && <p className="mt-2 text-sm text-gray-600">Selected File: {selFile}</p>}
          </div>

          <div>
            <label htmlFor="color" className="block text-sm font-medium  ">Color</label>
            <input
              type="text"
              id="color"
              onChange={petForm.handleChange}
              value={petForm.values.color}
              className="mt-1 py-2 px-3 bg-[#99AABB] block w-full   rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium  ">Age</label>
            <input
              type="number"
              id="age"
              onChange={petForm.handleChange}
              value={petForm.values.age}
              className="mt-1 py-2 px-3 bg-[#99AABB] block w-full   rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 bg-[#99AABB] text-blue-600   rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm  ">
              I accept the{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#79a192] text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700"
          >
            Add Pet
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AddPet;

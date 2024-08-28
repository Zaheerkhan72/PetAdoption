'use client';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useState, useEffect } from 'react';

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="relative bg-gray-100">
      {/* Hero Image */}
      <div className="relative bg-cover opacity-80 bg-center h-96" style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/07/00/88/79/360_F_700887990_N5qrQLgFO8zgzmqRXbS4m4dRKHValmPM.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10  justify-center h-full">
          <h1 className="text-6xl font-extrabold text-white mb-4 pt-12 text-center animate__animated animate__fadeIn">About Us</h1>
          <p className="text-lg text-center px-24 text-gray-300 mb-6">
          We are a passionate team dedicated to connecting pets in need with loving homes. Our mission is to make pet adoption accessible and straightforward, ensuring every animal finds a place to call home.
          
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
      

        {/* Mission and Vision Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.ctfassets.net/440y9b545yd9/144ynQJFHm4tTX6Muwbil8/b12fca1e55b0cc801ff4cd46c410fa7f/PetAdoptionTips850.jpg" alt="" />
              <h2 className="text-2xl font-semibold text-gray-800 my-4">Mission</h2>
              <p className="text-gray-600">
              Our mission is to improve the lives of pets and their owners by providing a user-friendly platform for pet adoption. We strive to raise awareness about pet adoption and ensure every pet finds a loving home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min-1024x569.jpg" alt="" />
              <h2 className="text-2xl font-semibold text-gray-800 my-4">Vision</h2>
              <p className="text-gray-600">
              We envision a world where every pet has a loving home. Through our platform, we aim to create a community that supports pet adoption and promotes responsible pet ownership.
              
              </p>
            </div>
          </div>
        </div>


       

        {/* Contact Information Section */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-4">
            Have any questions or want to learn more about us? Feel free to contact us through the form on our Contact page or via our social media channels.
          </p>
          <a href="/contact" className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;

'use client';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useState } from 'react';

const ContactPage = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      if (res.ok) {
        alert('Message sent successfully!');
        setContactData({ name: '', email: '', message: '' }); // Reset form after submission
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (

    <>
    <Navbar />
    <div className="relative overflow-hidden bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] bg-[url('https://source.unsplash.com/random/1920x1080?nature')] bg-cover bg-center opacity-40" />

      <div className="container mx-auto px-4 py-12 lg:flex lg:items-center lg:justify-between">
      

        {/* Image Section */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
        <h2 className="text-3xl font-extrabold text-center lg:text-left text-gray-800 mb-8 animate__animated animate__fadeIn">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6 lg:text-left">
            We’d love to hear from you! Whether you have a question about our services, need support, or just want to give feedback, feel free to reach out to us. 
            Our team is here to help and will get back to you as soon as possible.
          </p>
          <img
            src="https://www.shutterstock.com/image-vector/contact-us-form-on-laptop-600nw-2393966281.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
          {/* Content Section */}
          <div className="lg:w-1/2">
          
          <form onSubmit={handleSubmit} className="  rounded-lg px-16 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={contactData.name}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={contactData.email}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">Send</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;

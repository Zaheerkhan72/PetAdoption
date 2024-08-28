'use client';
import { useState } from 'react';

const AdoptForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    petId: '', // Pass the pet ID from the details page
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/adopt/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Adoption request submitted successfully!');
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          petId: '', // Ensure petId is also reset
        });
      } else {
        alert('Failed to submit adoption request.');
      }
    } catch (error) {
      console.error('Error submitting adoption request:', error);
    }
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/a9/26/6a/a9266a0c1c2a0117b864f7146ddb9e5d.jpg)' }}>
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 container bg-transparent p-6 mx-56 rounded-lg max-w-lg px-4 py-12">
        <h2 className="text-3xl font-bold text-[#ae8d65] text-center mb-6">Adopt a Pet</h2>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-[#ae8d65]">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#ae8d65]">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-[#ae8d65]">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-[#ae8d65]">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <input type="hidden" name="petId" value={formData.petId} />
          <button type="submit" className="w-full px-6 py-2 hover:bg-[#ae8d65] text-white rounded-lg shadow-lg bg-orange-900 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdoptForm;

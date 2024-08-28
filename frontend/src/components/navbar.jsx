'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-700 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400"
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 justify-center sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-white">Pet</span>
                <span className="text-yellow-300">Adoption</span>
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link href="/" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/about" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="/petList" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">Pets</Link>
              <Link href="/contact" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link href="/login" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
           
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link href="/" className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/about" className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link href="/petList" className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium">Pets</Link>
          <Link href="/contact" className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          <Link href="/login" className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

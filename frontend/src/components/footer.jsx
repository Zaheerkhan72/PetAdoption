import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-blue-600 text-white py-12">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <h3 className="text-lg font-bold">Contact Us</h3>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li>123 Pet Street, Animal City, PA 12345</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: <a href="mailto:info@petadoption.com" className="text-blue-400 hover:underline">info@petadoption.com</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold">Quick Links</h3>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
          <li><a href="/adopt" className="hover:text-blue-400">Adopt</a></li>
          <li><a href="/services" className="hover:text-blue-400">Services</a></li>
          <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold">Follow Us</h3>
        <div className="mt-4 flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2m-4 4v-4m4 4v-6l4-2M6 6v6l4 2m-4 4v-4m4 4v-6l4-2" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 19c8 0 13-6 13-11 0-1 0-2-.3-3a10.7 10.7 0 0 1-3.6 1 5.5 5.5 0 0 0 2.4-3 11 11 0 0 1-3.5 1 5.5 5.5 0 0 0-9.4 5a11 11 0 0 1-8-4 5.5 5.5 0 0 0 1.7 7.4A5.5 5.5 0 0 1 2 13v.1a5.5 5.5 0 0 0 4.5 5.5 5.5 5.5 0 0 1-2.4.1 5.5 5.5 0 0 0 5.1 3.8" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6zm6 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm6-10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold">Newsletter Signup</h3>
        <p className="mt-4 text-gray-300">
          Stay updated with our latest news and adoption events. Subscribe to our newsletter!
        </p>
        <form className="mt-4 flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-2 w-full rounded-lg border border-gray-300 p-2 text-gray-900 sm:mb-0 sm:w-2/3"
          />
          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 sm:ml-4 sm:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-700 pt-6 text-center">
      <p className="text-gray-300">
        &copy; {new Date().getFullYear()} Pet Adoption. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
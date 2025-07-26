import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">The Michael Scott Paper Company</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


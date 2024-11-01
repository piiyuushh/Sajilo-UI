'use client';
import React, { useState } from 'react';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Button to Open Drawer */}
      <button
        onClick={toggleDrawer}
        className='p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-400 dark:focus:ring-blue-300 transition duration-200'
      >
        Open Drawer
      </button>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer Sidebar */}
      <div
        className={`fixed top-0 left-0  h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700'>
          <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-100'>
            Menu
          </h2>
          <button
            onClick={toggleDrawer}
            className='text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none'
          >
            &times;
          </button>
        </div>
        <div className='p-4'>
          <a
            href='#'
            className='block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors duration-200'
          >
            Home
          </a>
          <a
            href='#'
            className='block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors duration-200'
          >
            About
          </a>
          <a
            href='#'
            className='block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors duration-200'
          >
            Services
          </a>
          <a
            href='#'
            className='block py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors duration-200'
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

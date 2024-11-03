import React from 'react';
import { HiHome, HiOutlineUserCircle, HiShoppingCart, HiCog } from "react-icons/hi";

const BottomNavigation = () => {
  return (
    // add fixed bottom-0 left-0 right-0 to the div className below
    <div className=" bg-white dark:bg-[#030618] border-t border-gray-200 dark:border-[#030618] shadow-lg rounded-t-lg">
      <div className="flex justify-around items-center p-4">
        {/* Home */}
        <div className="flex flex-col items-center text-gray-600 dark:text-white transition-colors duration-200">
          <HiHome className="w-6 h-6"/>
          <span className="text-xs">Home</span>
        </div>

        {/* Shop */}
        <div className="flex flex-col items-center text-gray-600 dark:text-white transition-colors duration-200">
          <HiShoppingCart className="w-6 h-6" />
          <span className="text-xs">Shop</span>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center text-gray-600 dark:text-white transition-colors duration-200">
          <HiOutlineUserCircle className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </div>

        {/* Settings */}
        <div className="flex flex-col items-center text-gray-600 dark:text-white transition-colors duration-200">
          <HiCog className="w-6 h-6" />
          <span className="text-xs">Settings</span>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
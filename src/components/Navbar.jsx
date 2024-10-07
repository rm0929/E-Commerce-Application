import React from "react";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-950 shadow-md py-4 px-6 space-x-6">
      {/* Logo */}
      <img
        src="src\assets\logo.png"  // Replace with your logo path
        alt="Logo"
        className="w-12 h-12"
      />

      {/* Location Icon */}
      <div className="flex items-center text-white text-3xl">
        <FaMapMarkerAlt className="mr-2" />
        <span className="text-xl hidden">Tempe, AZ</span>
      </div>

      {/* Search Bar */}
      <div className="relative flex-grow items-center">
        <input
          type="text"
          placeholder="Search products..."
          className=" w-full border border-gray-300 rounded-sm py-2 px-4 pl-10"
        />
        <FaSearch className="absolute top-3 left-3 text-yellow-500" />
      </div>

      {/* Language Switch */}
      <button className="bg-gray-200 text-gray-600 py-1 px-4">
        EN
      </button>

      {/* Login Button*/}
      <button className="bg-blue-500 text-white py-1 px-4">
        Log In
      </button>

      {/* Cart */}
      <div className="relative flex items-center">
        <FaShoppingCart className="text-yellow-500 text-3xl" />
        <span className="absolute -top-0 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
          0
        </span>
      </div>
    </div>
  );
};

export default Navbar;

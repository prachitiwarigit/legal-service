import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container flex items-center justify-between">
        {/* Logo Section */}
        <img src="/images/lo.svg" alt="Logo" />

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-6">
          {/* Consult an Expert */}
          <div className="flex items-center bg-yellow-400 text-black py-2 px-4 rounded cursor-pointer gap-2">
            Consult an Expert  
            <IoMdArrowDropdown className="text-xl" />
          </div>

          {/* Main Navigation Links */}
          {["Business Setup", "Tax & Compliance", "Documentation", "Others"].map((item, index) => (
            <div key={index} className="flex items-center gap-1 cursor-pointer">
              <h5 className="text-white">{item}</h5>
              <RiArrowDropDownLine className="text-3xl -mt-1" />
            </div>
          ))}

          {/* Login Button */}
          <button className="text-white border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-blue-900 transition">
            Login
          </button>
          <button className="text-white">
          <IoMdMenu className="text-3xl" />
        </button>
        </div>
       
      </div>
    </header>
  );
}

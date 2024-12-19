"use client"
import { useState } from "react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      {/* Navbar Container */}
      <div className="flex justify-between items-center h-[74px] px-4 sm:px-6 md:px-[120px]">
        {/* Brand / Logo */}
        

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
         <IoIosMenu className="text-3xl text-gray-800"/>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex md:items-center md:gap-8 text-sm">
          <li className="hover:text-blue-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/Shop">Shop</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/Productpage">Product</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/Pages">Pages</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/Aboutus">About</Link>
          </li>
        </ul>

        {/* Desktop Contact Information */}
        <div className="hidden md:block text-xs">
          <Link href="/Contactus">Contact: (808) 555-0111</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 md:hidden bg-gray-100`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-sm">
          <li className="hover:text-blue-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/Shop">Shop</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/Productpage">Product</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/Pages">Pages</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/Aboutus">About</Link>
          </li>
          <li className="text-gray-800 text-xs">
            <Link href="/Contactus">Contact: (808) 555-0111</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

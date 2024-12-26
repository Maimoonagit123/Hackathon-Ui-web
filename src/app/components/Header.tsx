import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";


const Header = () => {
  return (
    <div>
<header className="flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-[#272343] text-white font-inter font-extralight px-4 sm:px-6 md:px-[120px] py-2 sm:py-3 h-auto sm:h-[45px]">
  {/* Left Section: Free Shipping Text */}
  <div className="flex items-center gap-2 opacity-70">
    {/* Check Icon */}
    <FaCheck className="w-4 h-4 text-white" />
    {/* Shipping Text */}
    <p className="text-xs sm:text-sm font-normal capitalize">
      Free shipping on all orders over $50
    </p>
  </div>

  {/* Right Section: Links */}
  <div className="flex items-center gap-3 text-xs sm:text-sm opacity-70">
    {/* Language Selector */}
    <div className="flex items-center gap-1 cursor-pointer">
      <span>ENG</span>
      <IoChevronDown className="w-3 h-3" />
    </div>

    {/* Currency Selector */}
    <div className="flex items-center gap-1 cursor-pointer">
      <span>USD</span>
      <IoChevronDown className="w-3 h-3" />
    </div>

    {/* FAQs Link */}
    <ul>
      <li>
        <Link href="/faqs" className="hover:opacity-100 transition-opacity">
          FAQs
        </Link>
      </li>
    </ul>

    {/* Need Help Section */}
    <div className="flex items-center gap-1 cursor-pointer">
      {/* Help Icon */}
      <RxQuestionMarkCircled className="w-4 h-4" />
      {/* Help Text */}
      <Link href="/contact" className="hover:opacity-100 transition-opacity">
        Need Help
      </Link>
    </div>
  </div>
</header>


    </div>
    
  );
};

export default Header;





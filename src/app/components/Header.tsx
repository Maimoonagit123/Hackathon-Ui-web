import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";

const Header = () => {
  return (
    <header className= "flex justify-between fixed overflow-hidden text-white font-inter-200  w-full md:px-[150px]  md:py-3 md:h-[45px] bg-[#272343]">
     
      <div className="flex items-center gap-2 opacity-70 ">
        {/* Check Icon */}
        < FaCheck className="w-4 h-4 text-white" />
        {/* Shipping Text */}
        <p className="text-sm font-normal capitalize">
          Free shipping on all orders over $50
        </p>
      </div>

      {/* Links Section */}
      <div className="flex items-center gap-3 opacity-70 text-xs">
        {/* Language Selector */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span >ENG</span>
          <IoChevronDown className="w-3 h-3" />
        </div>

        {/* Usd select */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span>USD</span>
          <IoChevronDown className="w-3 h-3" />
        </div>


        {/* FAQs Link */}
        <ul><li><Link href="/faqs" className="text-sm hover:opacity-100 transition-opacity">Faqs</Link></li></ul>
        {/* Need Help Section */}
        <div className="flex items-center gap-1 cursor-pointer">
          {/* Help Icon */}
          <RxQuestionMarkCircled className="w-4 h-4 opacity-70" />
          {/* Help Text */}
          <span >Need Help</span>
        </div>
      </div>
    </header>

  );
};

export default Header;





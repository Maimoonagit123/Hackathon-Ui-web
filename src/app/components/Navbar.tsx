"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
 

  return (
    <div>
      <div className="bg-[#F0F2F3] w-full h-auto px-4 lg:px-[120px] font-inter mx-auto pt-5 sm:pt-2 sm:my-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <Link href="/">
            <div className="flex items-center w-auto my-4">
              <Image src="/images/logo.png" alt="logo" width={24} height={24} />
              <div className="text-[#272343] px-2 text-lg sm:text-xl">Comforty</div>
            </div>
          </Link>

          {/* Cart Section */}
          <div className="flex items-center gap-2 bg-white p-2 sm:p-4 rounded-md shadow w-auto sm:w-[120px] h-auto sm:h-[44px] sm:mt-0">
            <Link href="/cart">
              <Image src="/images/cart.png" alt="cart" className="w-5 h-5 text-gray-800" width={22} height={22} />
            </Link>
            <button
              onClick={() => router.push("/cart")}
              className="flex gap-1 items-center text-gray-800 text-sm sm:text-base font-medium">Cart
              <div className="flex items-center justify-center w-[18px] sm:w-[22px] h-[18px] sm:h-[20px] text-white bg-teal-500 rounded-full text-xs font-bold">
              
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

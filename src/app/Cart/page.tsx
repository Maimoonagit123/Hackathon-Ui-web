import React from "react";
import Image from "next/image";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Cart",
  description: "Generated by Maimoona Masood",
  icons: {
    icon: {
      url: "images/logo.png",
      type: "image.png"
    }
    }
  };

const Cart = () => {
  return (
    <div>
     <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 my-20">
  <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 h-auto lg:h-[632.89px]">
    {/* Left Section */}
    <div className="flex-1 h-auto lg:h-[547.89px] lg:w-3/4 w-full">
      <div className="max-w-[733px] mx-auto">
        <div className="mb-8">
          <h2 className="font-inter text-xl sm:text-2xl font-bold">Bag</h2>
        </div>

        {/* Item 1 */}
        <div className="w-full flex flex-wrap md:flex-nowrap gap-6 lg:gap-[24px] mb-6 border-b pb-6">
          <div className="flex-shrink-0">
            <Image
              src="/images/orangechair.png"
              alt="orangechair"
              height={150}
              width={150}
              className="rounded-none"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-inter font-normal text-sm sm:text-base text-[#272343]">
                Library Stool Chair
              </h3>
              <div className="font-inter font-normal text-base sm:text-lg text-[#111111]">
                MRP: $99
              </div>
            </div>
            <p className="font-inter font-normal text-sm sm:text-lg text-[#757575]">
              Ashen Slate/Cobalt Bliss
            </p>
            <div className="flex justify-between mt-2 text-[#757575] text-sm">
              <div>Size L</div>
              <div>Quantity 1</div>
            </div>
            <div className="flex gap-4 mt-6">
              <Image
                src="/images/heart.png"
                alt="heart"
                height={19}
                width={19}
              />
              <Image
                src="/images/dustbin.png"
                alt="dustbin"
                height={19}
                width={19}
              />
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="w-full flex flex-wrap md:flex-nowrap gap-6 lg:gap-[24px] mb-6 border-b pb-6">
          <div className="flex-shrink-0">
            <Image
              src="/images/wingchair.png"
              alt="wingchair"
              height={150}
              width={150}
              className="rounded-none"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-inter font-normal text-sm sm:text-base text-[#272343]">
                Library Stool Chair
              </h3>
              <div className="font-inter font-normal text-base sm:text-lg text-[#111111]">
                MRP: $99
              </div>
            </div>
            <p className="font-inter font-normal text-sm sm:text-lg text-[#757575]">
              Ashen Slate/Cobalt Bliss
            </p>
            <div className="flex justify-between mt-2 text-[#757575] text-sm">
              <div>Size L</div>
              <div>Quantity 1</div>
            </div>
            <div className="flex gap-4 mt-6">
              <Image
                src="/images/heart.png"
                alt="heart"
                height={19}
                width={19}
              />
              <Image
                src="/images/dustbin.png"
                alt="dustbin"
                height={19}
                width={19}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Section (Summary) */}
    <div className="flex-shrink-0 lg:w-[350px] w-full">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="font-inter font-bold text-center lg:text-left lg:font-medium text-lg sm:text-xl">Summary</h1>
        <div className="flex justify-between mt-8">
          <h2 className="text-sm sm:text-base">Subtotal</h2>
          <div className="text-sm sm:text-base">$198.00</div>
        </div>
        <div className="flex justify-between mt-5">
          <h2 className="text-sm sm:text-base">Estimated Delivery And Handling</h2>
          <div className="text-sm sm:text-base">Free</div>
        </div>
        <div className="flex justify-between mt-5 py-3 border-y-2">
          <div className="text-sm sm:text-base font-medium">Total</div>
          <div className="text-sm sm:text-base font-medium">$198.00</div>
        </div>
        <button className="rounded-full font-inter font-medium text-white bg-[#029FAE] w-full h-12 mt-5 hover:scale-110 transition-transform duration-200 ease-in-out">
          Member Checkout
        </button>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Cart;
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <main className=" font-inter">
        <div className=" rounded-bl-lg flex flex-col md:flex-row bg-[#F0F2F3] px-4 sm:px-8 md:px-[70px] pb-14 mx-auto w-full md:w-[83%] h-auto md:h-[850px] overflow-hidden items-center ">
          {/* <!-- Left Section --> */}
          <div className="w-full md:w-[557px] h-auto text-center md:text-left px-4 sm:px-8">
  <p className="text-sm sm:text-sm font-medium text-gray-600 uppercase">
    Welcome to Chairy
  </p>
  <h1 className="mt-4 text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-snug">
    Best Furniture
    <br />
    Collection For Your Interior.
  </h1>
  <div className="flex justify-center md:justify-start mt-6">
  <button className="px-6 py-3 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 flex items-center gap-2">
    Shop Now
    <Image
      src="/images/arrow.png"
      alt="Chair"
      height={24}
      width={24}
    />
  </button>
</div>
</div>
          {/* <!-- Right Section (Image) --> */}
          <div className="mt-10 md:mt-0">
            <Image
              src="/images/chair.png"
              alt="Chair"
              height={584}
              width={434}
              className="w-full h-auto max-w-[400px] md:max-w-none"
            />
          </div>
        </div>
      </main>

      {/* center section */}

      <div className="w-full flex flex-wrap justify-between items-center px-4 md:px-10 py-4">
        <div className=" flex justify-center items-center w-[85px] h-[87px] sm:w-[85px] sm:h-[87px]">
          <Image src="/images/zapier.png" alt="logos" height={87} width={85} />
        </div>
        <div className="flex justify-center items-center w-[85px] h-[87px] sm:w-[85px] sm:h-[87px]">
          <Image src="/images/pipe.png" alt="pipe" height={87} width={85} />
        </div>
        <div className="flex justify-center items-center w-[135px] h-[139px] sm:w-[135px] sm:h-[139px]">
          <Image src="/images/cib.png" alt="pipe" height={139} width={135} />
        </div>
        <div className=" flex justify-center items-center w-[63px] h-[65px] sm:w-[63px] sm:h-[65px]">
          <Image src="/images/x.png" alt="x" height={65} width={63} />
        </div>
        <div className=" flex justify-center items-center w-[98px] h-[101px] sm:w-[98px] sm:h-[101px]">
          <Image src="/images/burnt.png" alt="burnt" height={101} width={98} />
        </div>
        <div className=" flex justify-center items-center w-[113px] h-[115px] sm:w-[113px] sm:h-[115px]">
          <Image src="/images/panda.png" alt="panda" height={113} width={115} />
        </div>
        <div className=" flex justify-center items-center w-[84px] h-[87px] sm:w-[84px] sm:h-[87px]">
          <Image src="/images/moz.png" alt="moz" height={84} width={87} />
        </div>
      </div>

      <div className="px-4 lg:mx-10 mx-auto">
        {/* Title */}
        <div className="text-xl font-bold pb-[40px] text-center lg:text-left">
          <h1>Featured Products</h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="relative w-full">
            {/* Status Badge */}
            <div className="absolute top-2 left-2 bg-[#01AD5A] text-white text-xs font-medium capitalize px-2 py-1 rounded-[4px]">
              New
            </div>

            {/* Product Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/whitechair.png"
                alt="chair1"
                height={312}
                width={312}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-800 hover:text-[#007580]">
                Library Stool Chair
              </h3>
              <p className="text-sm font-medium text-gray-800">$20</p>
            </div>

            {/* Add to Cart Button */}
            <button className="absolute bottom-2 right-2 bg-[#F0F2F3] hover:bg-[#007580] text-white p-2 rounded-md">
              <Image src="/images/cart.png" alt="cart" width={22} height={22} />
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="relative w-full">
            {/* Status Badge */}
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium capitalize px-2 py-1 rounded-[4px]">
              New
            </div>

            {/* Product Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/pinkchair.png"
                alt="chair2"
                height={312}
                width={312}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-800 hover:text-[#007580]">
                Library Stool Chair
              </h3>
              <p className="text-sm font-medium text-gray-800">$20</p>
            </div>

            {/* Add to Cart Button */}
            <button className="absolute bottom-2 right-2 bg-[#F0F2F3] hover:bg-[#007580] text-white p-2 rounded-md">
              <Image src="/images/cart.png" alt="cart" width={22} height={22} />
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="relative w-full">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/orangechair.png"
                alt="chair3"
                height={312}
                width={312}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-800 hover:text-[#007580]">
                Library Stool Chair
              </h3>
              <p className="text-sm font-medium text-gray-800">$20</p>
            </div>

            {/* Add to Cart Button */}
            <button className="absolute bottom-2 right-2 bg-[#F0F2F3] hover:bg-[#007580] text-white p-2 rounded-md">
              <Image src="/images/cart.png" alt="cart" width={22} height={22} />
            </button>
          </div>

          {/* Product Card 4 */}
          <div className="relative w-full">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/white.png"
                alt="chair4"
                height={312}
                width={312}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-800 hover:text-[#007580]">
                Library Stool Chair
              </h3>
              <p className="text-sm font-medium text-gray-800">$20</p>
            </div>

            {/* Add to Cart Button */}
            <button className="absolute bottom-2 right-2 bg-[#F0F2F3] hover:bg-[#007580] text-white p-2 rounded-md">
              <Image src="/images/cart.png" alt="cart" width={22} height={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-xl font-bold mx-10">
        <h1>Top Categories</h1>
      </div>
      <div className="flex justify-between items-center w-full gap-5 h-[461px] px-10 p-5">
        <div className="w-[424px] h-[424px]">
          <Image
            src="/images/wingchair.png"
            alt="wingchair"
            height={424}
            width={424}
          />
          <div className="inset-x-0 bottom-0 bg-black/70 text-white px-4 py-2 rounded-b-lg">
            <h2 className="text-lg font-semibold">Wing Chair</h2>
            <p className="text-sm">3584 Products</p>
          </div>
        </div>
        <div className="w-[424px] h-[424px]">
          <Image
            src="/images/woodenchair.png"
            alt="woodenchair"
            height={424}
            width={424}
          />
        </div>
        <div className="w-[424px] h-[424px]">
          <Image
            src="/images/black.png"
            alt="blackchair"
            height={424}
            width={424}
          />
          <div className="inset-x-0 bottom-0 bg-black/70 text-white px-4 py-2 rounded-b-lg">
            <h2 className="text-lg font-semibold">Desk Chair</h2>
            <p className="text-sm">154 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

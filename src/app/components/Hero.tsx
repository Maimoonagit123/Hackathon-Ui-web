import React from "react";
import Image from "next/image";
import Link from "next/link"
const Hero = () => {
  return (
    <div>
      <main className=" font-inter">
        <div className=" rounded-bl-lg flex flex-col md:flex-row bg-[#F0F2F3] sm:px-8 md:px-[70px] pb-14 md:mx-auto px-5 w-full md:w-[83%] h-auto md:h-[850px] overflow-hidden items-center ">
          {/* <!-- Left Section --> */}
          <div className="w-full md:w-[557px] h-auto text-center md:text-left px-4 sm:px-8">
            <p className="text-sm sm:text-sm font-medium text-gray-600 uppercase text-left py-3 md:py-0">
              Welcome to Chairy
            </p>
            <h1 className="mt-4 text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#272343] leading-snug text-left">
              Best Furniture
              <br />
              Collection For Your Interior.
            </h1>
            <div className="flex justify-start mt-6">
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
          <div className="mt-20 md:mt-0 ">
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
      <div className="w-full flex flex-wrap justify-between items-center mx-auto gap-3 px-4 sm:px-6 md:w-[83%] md:px-0 py-4">
        <div className="flex justify-center items-center w-[75px] h-[75px] xsm:w-[85px] xsm:h-[85px] sm:w-[85px] sm:h-[87px] lg:w-[95px] lg:h-[95px]">
          <Image src="/images/zapier.png" alt="logos" height={87} width={85} />
        </div>
        <div className="flex justify-center items-center w-[75px] h-[75px] xsm:w-[85px] xsm:h-[85px] sm:w-[85px] sm:h-[87px] lg:w-[95px] lg:h-[95px]">
          <Image src="/images/pipe.png" alt="pipe" height={87} width={85} />
        </div>
        <div className="flex justify-center items-center w-[105px] h-[105px] xsm:w-[125px] xsm:h-[125px] sm:w-[135px] sm:h-[139px] lg:w-[145px] lg:h-[145px]">
          <Image src="/images/cib.png" alt="pipe" height={139} width={135} />
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px] xsm:w-[60px] xsm:h-[60px] sm:w-[63px] sm:h-[65px] lg:w-[70px] lg:h-[70px]">
          <Image src="/images/x.png" alt="x" height={65} width={63} />
        </div>
        <div className="flex justify-center items-center w-[75px] h-[75px] xsm:w-[90px] xsm:h-[90px] sm:w-[98px] sm:h-[101px] lg:w-[110px] lg:h-[110px]">
          <Image src="/images/burnt.png" alt="burnt" height={101} width={98} />
        </div>
        <div className="flex justify-center items-center w-[85px] h-[85px] xsm:w-[105px] xsm:h-[105px] sm:w-[113px] sm:h-[115px] lg:w-[125px] lg:h-[125px]">
          <Image src="/images/panda.png" alt="panda" height={113} width={115} />
        </div>
        <div className="flex justify-center items-center w-[70px] h-[70px] xsm:w-[80px] xsm:h-[80px] sm:w-[84px] sm:h-[87px] lg:w-[90px] lg:h-[90px]">
          <Image src="/images/moz.png" alt="moz" height={84} width={87} />
        </div>
      </div>

      <div className="px-4 mx-auto md:w-[85%]">
        {/* Title */}
        <div className="text-xl font-bold pb-[40px] text-center  lg:text-left">
          <h1 className="w-[286px] h-[35px] font-inter text-[32px] leading-[35.2px] text-[#272343]">Featured Products</h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
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

      {/* top categories section */}
      
      <div className="w-[83%] h-[44px] ml-[148px] font-inter mt-24 ">
        <div>
          <h1 className="text-[#272343] text-[32px] leading-[35.2px] w-[237px] h-[35px]">
         
            Top Categories
          </h1>
        </div>
      </div>
      <div className="flex  gap-5 w-[83%] h-[424px] mt-10 ml-[148px]">
        <div className="relative w-[424px] h-[424px] hover:scale-95 rounded-[10px] overflow-hidden ">
          {/* <!-- Image --> */}
          <Image
            src="/images/wing2.png"
            alt="Wing Chair"
            height={424}
            width={424}
            className="w-full h-full object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 p-5 flex flex-col items-start gap-2">
            <h3 className="text-white text-lg font-semibold">Wing Chair</h3>
            <p className="text-white text-sm">3,584 Products</p>
          </div>
        </div>
        {/* second image */}
        <div className="relative w-[424px] h-[424px] hover:scale-95  rounded-[10px] overflow-hidden ">
          {/* <!-- Image --> */}
          <Image
            src="/images/wood.png"
            alt="Wooden Chair"
            height={424}
            width={424}
            className=" w-full h-full object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 p-5 flex flex-col items-start gap-2">
            <h3 className="text-white text-lg font-semibold">Wooden Chair</h3>
            <p className="text-white text-sm">137 Products</p>
          </div>
        </div>

        {/* third image */}
        <div className="relative w-[424px] h-[424px] hover:scale-95  rounded-[10px] overflow-hidden ">
          {/* <!-- Image --> */}
          <Image
            src="/images/desk.png"
            alt="Wooden Chair"
            height={424}
            width={424}
            className=" w-full h-full object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 p-5 flex flex-col items-start gap-2">
            <h3 className="text-white text-lg font-semibold">Desk Chair</h3>
            <p className="text-white text-sm">134 Products</p>
          </div>
        </div>
      </div>

         {/* Explore New Section */}
        
      <div className="lg:relative lg:-left-[180px] lg:top-[460px] mt-10 sm:mt-20 lg:mt-0 mx-10 sm:mx-[10px] lg:mx-0 md:mx-[60px]">
        <div className="lg:absolute w-[648px] h-[52px] text-[22px]  sm:text-[30px] md:text-[34px] leading-[40px] sm:text-center uppercase font-roboto md:font-normal font-bold text-black lg:rotate-[-90deg]">
          Explore new and popular style
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row  gap-5 lg:w-[83%] w-full lg:h-[648px] h-auto mt-[30px] md:mt-[80px] lg:mt-[150px] ml-auto lg:ml-[148px] px-4">
        {/* Left Section */}
        <div className="lg:w-1/2 w-auto lg:h-[648px] h-auto">
          <Image
            src="/images/orange2.png"
            alt="cart"
            width={648}
            height={648}
            className="w-full h-auto lg:h-[648px] object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-auto lg:h-[648px] h-auto">
          {/* Top Row */}
          <div className="flex flex-wrap lg:flex-nowrap gap-5">
            <div className="w-[312px] h-[312px]">
              <Image
                src="/images/white4.png"
                alt="cart"
                width={312}
                height={312}
                className="w-full h-auto lg:h-[312px] object-cover"
              />
            </div>
            <div className="w-[312px] h-[312px]">
              <Image
                src="/images/whitechair3.png"
                alt="cart"
                width={312}
                height={312}
                className="w-full h-auto lg:h-[312px] object-cover"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap lg:flex-nowrap  gap-5 mt-6">
            <div className="w-[312px] h-[312px]">
              <Image
                src="/images/curve.png"
                alt="cart"
                width={312}
                height={312}
                className="w-full h-auto lg:h-[312px] object-cover"
              />
            </div>
            <div className="w-[312px] h-[312px]">
              <Image
                src="/images/whitechair3.png"
                alt="cart"
                width={312}
                height={312}
                className="w-auto h-auto lg:h-[312px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
                                            {/* products Section */}
      
  <div className="lg:pb-[80px] lg:w-[83%] mx-auto px-4 sm:px-6 md:px-8">
  {/* Title */}
  <div className="text-2xl pb-[40px] mt-16 md:text-center text-left">
    <h1 className="font-inter font-semibold text-[32px] leading-[35.2px] w-full text-[#272343]">
      Our Products
    </h1>
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {/* Product Cards */}
    {[
      { src: "/images/whitechair.png", label: "New", price: "$20" },
      { src: "/images/pinkchair.png", label: "New", price: "$20" },
      { src: "/images/orangechair.png", price: "$20" },
      { src: "/images/white.png", price: "$20" },
      { src: "/images/stool.png", label: "New", price: "$20" },
      { src: "/images/grey.png", label: "New", price: "$20" },
      { src: "/images/greenchair.png", price: "$20" },
      { src: "/images/whitechair.png", price: "$20" },
    ].map((product, index) => (
      <div key={index} className="relative w-full">
        {/* Status Badge */}
        {product.label && (
          <div className="absolute top-2 left-[132px] sm:left-[20px] md:left-8 lg:left-2 bg-[#01AD5A] text-white text-xs font-medium capitalize px-2 py-1 rounded-[4px]">
            {product.label}
          </div>
          
        )}

        {/* Product Image */}
        <div className="flex justify-center items-center">
          <a href="/product">
            <Image
              src={product.src}
              alt={`chair${index + 1}`}
              height={312}
              width={312}
              className="w-full h-auto rounded-lg"
            />
          </a>
          
        </div>

        {/* Product Details */}
        <div className="mt-3 text-center lg:text-left">
          <h3 className="text-sm font-medium text-gray-800 hover:text-[#007580]">
            Library Stool Chair
          </h3>
          <p className="text-sm font-medium text-gray-800">{product.price}</p>
        </div>

        {/* Add to Cart Button */}
        <button className="absolute bottom-2 right-32 sm:right-0 md:right-6 lg:right-[0px] bg-[#F0F2F3] hover:bg-[#007580] text-white p-2 rounded-md">
          <a href="/product">
            <Image
              src="/images/cart.png"
              alt="cart"
              width={22}
              height={22}
            />
          </a>
        </button>
      </div>
    ))}
  </div>
</div>
                                   
    </div>
  );
};

export default Hero;


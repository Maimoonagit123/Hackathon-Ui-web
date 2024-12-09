import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <main>
        <div className="flex items-center justify-between bg-gray-50  rounded-bl-lg mx-10 w-[1304px] h-[850px] p-[150px] ">
          {/* <!-- Left Section --> */}
          <div className="w-[557px] h-[337px]  ">
            <p className="text-sm font-medium text-gray-600 uppercase">
              Welcome to Chairy
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 leading-snug">
              Best Furniture
              <br />
              Collection For Your Interior.
            </h1>
            <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 flex items-center gap-2">
              Shop Now
              <Image
                src="/images/arrow.png"
                alt="Chair"
                height={24}
                width={24}
              />
            </button>
          </div>

          {/* <!-- Right Section (Image) --> */}
          <div className="">
            <Image
              src="/images/chair.png"
              alt="Chair"
              height={584}
              width={434}
            />
          </div>
        </div>
      </main>
      {/* center section */}

      <div className="w-full flex justify-between items-center h-[139px] px-10">
        <div className="bg-color-pink w-[85px] h-[87px]">
          <Image src="/images/zapier.png" alt="logos" height={87} width={85} />
        </div>
        <div className="bg-color-pink w-[85px] h-[87px]">
          <Image src="/images/pipe.png" alt="pipe" height={87} width={85} />
        </div>
        <div className="bg-color-pink w-[135px] h-[139px]">
          <Image src="/images/cib.png" alt="pipe" height={139} width={135} />
        </div>
        <div className="bg-color-pink w-[63px] h-[65px]">
          <Image src="/images/x.png" alt="x" height={65} width={63} />
        </div>
        <div className="bg-color-pink w-[98px] h-[101px]">
          <Image src="/images/burnt.png" alt="burnt" height={101} width={98} />
        </div>
        <div className="bg-color-pink w-[113px]] h-[115px]">
          <Image src="/images/panda.png" alt="panda" height={113} width={115} />
        </div>
        <div className="bg-color-pink w-[84px]] h-[87px]">
          <Image src="/images/moz.png" alt="moz" height={84} width={87} />
        </div>
      </div>

      <div className="text-xl font-bold mx-10">
        <h1>Featured Products</h1>
      </div>
      <div className="flex justify-between items-center w-full gap-5 h-[461px] px-10 p-5">
        <div className="w-[312px] h-[377px]">
          <Image
            src="/images/whitechair.png"
            alt="chair1"
            height={312}
            width={312}
          />
        </div>
        <div className="w-[312px] h-[377px] ">
          <Image
            src="/images/pinkchair.png"
            alt="chair2"
            height={312}
            width={312}
          />
        </div>
        <div className="w-[312px] h-[377px] ">
          <Image
            src="/images/orangechair.png"
            alt="chair3"
            height={312}
            width={312}
          />
        </div>
        <div className="w-[312px] h-[377px] ">
          <Image
            src="/images/white.png"
            alt="chair4"
            height={312}
            width={312}
          />
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

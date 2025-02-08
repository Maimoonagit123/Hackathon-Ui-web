import React from "react";
import Image from "next/image";
import Link from "next/link";
import Explore from "../explore/page";
import Feature from "./Features/page";
import TopCategories from "./Categories";
import OurProducts from "./OurProducts";
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
             <Link href="/product">
             <button className="px-6 py-3 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 flex items-center gap-2">
                Shop Now
                <Image
                  src="/images/arrow.png"
                  alt="Chair"
                  height={24}
                  width={24}
                />
              </button>
             </Link>
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

      {/* featured products*/}
      <div>
        <Feature />
      </div>
      {/* top categories */}
      <div>
        <TopCategories />
      </div>
      {/* Explore Section */}
      <div>
        <Explore />
      </div>
      {/* products Section */}
      <div>
        <OurProducts />
      </div>
    </div>
  );
};

export default Hero;

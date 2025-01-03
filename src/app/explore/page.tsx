import React from 'react'
import Image from 'next/image'

const explore = () => {
  return (
    <div>
      {/* Explore New Section */}
              
            <div className="lg:relative lg:-left-[200px] lg:top-[300px] mt-10 sm:mt-20 lg:mt-0 mx-10 sm:mx-[10px] lg:mx-0 md:mx-[60px]">
              <div className="lg:absolute w-[648px] h-[52px] text-[22px]  sm:text-[30px] md:text-[34px] leading-[40px] sm:text-center uppercase font-roboto md:font-normal font-bold text-black lg:rotate-[-90deg]">
                Explore new and popular style
              </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-5 lg:w-[83%] w-full lg:h-[648px] h-auto mt-[30px] md:mt-[80px] lg:mt-[150px] ml-auto lg:ml-[130px] px-4">
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
    </div>
  )
}

export default explore

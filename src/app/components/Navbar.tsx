import React from "react";
import Image from "next/image";

const Navbar = (props: any) => {
  console.log(props);
  return (
    <div>
      <div className=" flex justify-between items-center  w-full h-[84px] px-[500px]  ">
        <div className=" flex justify-center w-[166px] gap-[600px] h-[40px] py-3">
          <div className="flex justify-center items-center w-[166px] h-[40px] ">
            <div>
              <Image src="/images/logo.png" alt="logo" width={24} height={24} />
            </div>
            <div className="w-[118px] h-[31px] text-[#272343] px-1 text-xl">
              Comforty
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 bg-white p-4 rounded-md shadow w-[120px] h-[44px]">
            {/* <!-- Cart Icon --> */}
            <Image
              src="/images/cart.png"
              alt="cart"
              className="w-5 h-5 text-gray-800"
              width={22}
              height={22}
            />

            {/*   
  <!-- Cart Label --> */}
            <span className="text-gray-800 text-sm font-medium">Cart</span>

            {/* <!-- Badge --> */}
            <div className="flex items-center justify-center w-[22px] h-[20px] text-white bg-teal-500 rounded-full text-xs font-bold">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

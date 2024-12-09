import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-500 lg:h-[343px] lg:w-full py-10 ">
        <div
          className="container grid grid-cols-1 sm:grid-cols-2 m-10 
         md:grid-cols-3 lg:grid-cols-4 pl-5 w-[1320px]  lg:gap-[90px] font-normal ">
          <div className="w-[367px] h-[243px] space-y-4">
            <div className="flex justify-center items-center w-[166px] h-[40px]">
              <div>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-[118px] h-[31px] px-1 text-xl">
                Comforty
              </div>
            </div>
            <div>
              <p className="opacity-70">
                Vivamus tristique odio sit amet velit semper, 
                eu posuere turpis
                interdum. Cras egestas purus
              </p>
            </div>
            <div className="flex justify-between w-[206px] h-[38px]">
              <Image
                src="/images/fb.png"
                alt="fb-logo"
                height={18}
                width={18} 
                className="w-[38px] h-[38px]"
              />
              <Image
                src="/images/twitter.png"
                alt="twitter-logo"
                height={18}
                width={24}
                className="w-[38px] h-[38px]"
              />
              <Image
                src="/images/insta.png"
                alt="insta-logo"
                height={24}
                width={24}
                className="w-[38px] h-[38px]" />
              <Image
                src="/images/pinterest.png"
                alt="pinterest-logo"
                height={24}
                width={24}
                className="w-[38px] h-[38px]"/>
               <Image
                src="/images/youtube.png"
                alt="youtube-logo"
                height={24}
                width={24}
                className="w-[38px] h-[38px]"/>
            </div>
          </div>
          <div className="w-[105px] h-[203px] text-[#FAFAFA] space-y-4">
            <h1 className="text-xl opacity-70">Category</h1>
            <ul className="space-y-3">
              <li>Sofa</li>
              <li>Arm Chair</li>
              <li>Wing Chair</li>
              <li>Desk Chair</li>
              <li>Wooden Chair</li>
              <li>Park bench</li>

            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

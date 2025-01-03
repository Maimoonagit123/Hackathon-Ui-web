import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <main>
        <footer className="lg:h-[418px] h-fit w-full xl:pt-[80px] border-t bg-white">
          <div className="text-[#272343] container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 lg:p-12">
            {/* Logo and About Section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={24}
                  height={24}
                />
                <h1 className="text-xl font-bold px-2">Comforty</h1>
              </div>
              <p className="text-opacity-60 text-sm">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus.
              </p>

              <div className=" flex justify-between items-center">
                <div className="w-[38px] h-[38px] px-2 py-3 hover:border-2 hover:border-[#029FAE] rounded-full">
                  <Image
                    src="/images/fb.png"
                    alt="fb-logo"
                    height={16}
                    width={16}
                  />
                </div>
                <div className="w-[38px] h-[38px] px-2 py-3 hover:border-2 hover:border-[#029FAE] rounded-full">
                  <Image
                    src="/images/twitter.png"
                    alt="twitter-logo"
                    height={13}
                    width={16}
                  />
                </div>
                <div className="w-[38px] h-[38px] hover:border-2 hover:border-[#029FAE] rounded-full">
                  <Image
                    src="/images/insta.png"
                    alt="insta-logo"
                    height={38}
                    width={38}
                  />
                </div>
                <div className="w-[38px] h-[38px] hover:border-2 hover:border-[#029FAE] rounded-full">
                  <Image
                    src="/images/pinterest.png"
                    alt="pinterest-logo"
                    height={38}
                    width={38}
                  />
                </div>
                <div className="w-[38px] h-[38px] hover:border-2 hover:border-[#029FAE] rounded-full ">
                  <Image
                    src="/images/youtube.png"
                    alt="youtube-logo"
                    height={38}
                    width={38}
                  />
                </div>
              </div>
            </div>

            {/* Category Section */}
            <div className="space-y-4 lg:pl-[80px]">
              <h1 className="text-[#9A9CAA] text-sm font-semibold ">
                CATEGORY
              </h1>
              <ul className="space-y-2">
                {[
                  "Sofa",
                  "Arm Chair",
                  "Wing Chair",
                  "Desk Chair",
                  "Wooden Chair",
                  "Park Bench",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="hover:text-teal-500 transition hover:underline"
                  >
                    <Link href={`/category/${category.replace(" ", "")}`}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h1 className="text-[#9A9CAA] text-sm font-semibold">SUPPORT</h1>
              <ul className="space-y-2">
                {[
                  "Help and Support",
                  "Terms and Conditions",
                  "Privacy Policy",
                  "Help",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-teal-500 transition hover:underline"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h1 className="text-[#9A9CAA] text-sm font-semibold">
                NEWSLETTER
              </h1>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-grow h-10 px-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                />
                <button className="bg-[#029FAE] text-white px-4 py-2 rounded-md hover:bg-[#307075] transition">
                  Subscribe
                </button>
              </div>
              <p className="text-opacity-60 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim.
              </p>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Footer Bottom Section */}
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 px-4 lg:px-12">
            <p className="text-sm text-opacity-70 font-inter">
              @ 2021 - Blogy - Designed & Developed by{" "}
              <span className="font-medium font-inter text-black">
                Zakirsoft
              </span>
            </p>
            <Image
              src="/images/paypal.png"
              alt="paypal-logo"
              height={27}
              width={227}
              className="opacity-50"
            />
          </div>
        </footer>
      </main>
    </>
  );
};

export default Footer;

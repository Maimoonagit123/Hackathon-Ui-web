import React from "react";
import Image from "next/image";

const contact= () => {
  return (
    <div>
      <div className="w-full py-10">
        {/* Heading Section */}
        <div className="w-full text-center mb-5">
          <h1 className="font-poppins font-semibold text-2xl md:text-3xl text-[#272343]">
            Get In Touch With Us
          </h1>
        </div>
        <div className="w-full px-5 md:px-10 lg:px-0 max-w-3xl mx-auto text-center mb-10">
          <p className="font-poppins text-sm md:text-base text-[#9F9F9F] leading-6">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center mx-auto w-full lg:max-w-screen-lg px-4">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 p-6 rounded-lg">
            <div className="space-y-8">
              {/* Address Block */}
              <div className="flex gap-4 items-center">
                <Image
                  src="/images/location.png"
                  alt="location"
                  height={24}
                  width={24}
                />
                <div>
                  <h2 className="font-poppins font-medium text-2xl">Address</h2>
                  <p className="font-inter text-sm mt-2">
                    236 5th SE Avenue, New York
                    <br />
                    Y10000, United States
                  </p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex gap-4 items-center">
                <Image
                  src="/images/phone.png"
                  alt="phone"
                  height={24}
                  width={24}
                />
                <div>
                  <h2 className="font-poppins font-medium text-2xl ">Phone</h2>
                  <p className=" font-inter text-sm mt-2">
                    Mobile: +(84) 546-6789 <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex gap-4 items-center">
                <Image
                  src="/images/time.png"
                  alt="time"
                  height={24}
                  width={24}
                />
                <div>
                  <h2 className="font-poppins font-medium text-2xl">
                    Working Time
                  </h2>
                  <p className=" font-inter text-sm mt-2">
                    Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className=" w-full lg:w-1/2 p-6 rounded-lg">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about"
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="w-full lg:w-[237px] h-[55px] bg-teal-500 hover:bg-teal-600  font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F4F4F4] mx-auto py-10 sm:py-16 font-poppins">
  <div className="w-full flex flex-wrap justify-between px-4 sm:px-10 md:px-20 md:space-y-10 lg:space-y-0 lg:px-24">
    {/* High Quality Section */}
    <div className="w-full sm:w-[48%] md:w-[337px] h-auto flex items-center gap-3 py-4 pt-3">
      <Image
        src="/images/trophy.png"
        alt="trophy"
        height={60}
        width={60}
        className="flex-shrink-0"
      />
      <div>
        <h1 className="font-semibold text-xl md:text-2xl">High Quality</h1>
        <p className="text-[#898989] text-sm md:text-base">
          Crafted from top materials
        </p>
      </div>
    </div>
    {/* Warranty Protection Section */}
    <div className="w-full sm:w-[48%] md:w-[337px] h-auto flex items-center gap-3 py-4 md:py-0">
      <Image
        src="/images/rotick.png"
        alt="tick"
        height={60}
        width={60}
        className="flex-shrink-0"
      />
      <div>
        <h1 className="font-semibold text-xl md:text-2xl">Warranty Protection</h1>
        <p className="text-[#898989] text-sm md:text-base">Over 2 Years</p>
      </div>
    </div>
    {/* Support Section */}
    <div className="w-full sm:w-[48%] md:w-[337px] h-auto flex items-center gap-3 py-4 md:py-0">
      <Image
        src="/images/girl.png"
        alt="girl"
        height={60}
        width={60}
        className="flex-shrink-0"
      />
      <div>
        <h1 className="font-semibold text-xl md:text-2xl">24 / 7 Support</h1>
        <p className="text-[#898989] text-sm md:text-base">
          Dedicated Support
        </p>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default contact;

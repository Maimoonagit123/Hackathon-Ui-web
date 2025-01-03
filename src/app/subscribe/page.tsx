import React from 'react'
import Image from 'next/image'

const subscribe = () => {
  return (
    <div>
      {/* subscribe portion */}
         <div className='bg-[#f4f4f5]'>
         <div className=" lg:min-h-[700px]  lg:w-[83%] mx-auto mt-24 py-16 gap-10">
        {/* Newsletter Section */}
        <div className="container mx-auto text-center">
          <h2 className="w-full text-2xl sm:text-3xl lg:text-4xl font-semibold font-roboto mx-auto text-center">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex flex-col sm:flex-row items-center w-full lg:w-[643px] sm:max-w-md mx-auto mt-5 gap-4">
            <input
              type="email"
              placeholder="Email address..."
              className="w-full bg-[#f4f4f5] h-10 border-b-2 border-black opacity-60 px-2 text-sm sm:text-base hover:opacity-100 transition"
            />
            <button className="border-b-2 border-black opacity-60 px-6 py-2 text-sm font-sans font-normal hover:opacity-100 transition">
        SUBMIT
      </button>
      
          </div>
        </div>
      
        {/* Instagram Follow Section */}
        <div className="container mx-auto text-center mt-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-roboto">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 justify-center mt-10 px-4 sm:px-0">
            {/* Individual Image Items */}
            {["stool", "wingchair", "pinkchair", "whitechair", "orangechair", "black"].map((item, index) => (
              <div
                key={index}
                className="hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                <Image
                  src={`/images/${item}.png`}
                  alt={`${item}`}
                  height={200}
                  width={200}
                  className="rounded-md object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
         </div>
    </div>
  )
}

export default subscribe

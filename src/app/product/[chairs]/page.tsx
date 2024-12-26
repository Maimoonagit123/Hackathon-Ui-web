import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const chairs = () => {
  return (
    <div>
      <div className=' flex w-[1920px] gap-20 h-[607px] mx-[260px] mt-[40px] font-inter'>
        <div className='w-[675px] h-[607px]'>
        <div className=''>
        <Image 
        src="/images/pinkbig.png"
        alt="Pink chair"
        height={607}
        width={675}
        />
        </div>
        
        </div>
        <div className='w-[675px] h-[607px] '>
        <div className='text-[#272343] w-[541px] h-[132px] font-inter font-bold text-6xl'>
          Library Stool
          <br />
           Chair
          </div>
          <div className=' mt-8 ml-1'>
            <button className='w-[118px] h-[44px] bg-[#029FAE] text-white rounded-full hover:bg-[#307075] transition'>$20.00 USD</button>
          </div>
          <hr className='mt-10'/>
          <div className='w-[543px] h-[101px] mt-5'>
         <p className='opacity-60 text-[#272343] font-normal text-xl'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. 
         Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div className="flex items-center mt-5  py-[14px] px-[24px] gap-5 font-semibold text-xl bg-[#029FAE]  w-[212px] h-[63px] rounded-lg ml-1 hover:scale-105 transition duration-100 ease-in-out">
                <Image
                  src="/images/Cart2.png"
                  alt="cart"
                  width={29}
                  height={29}
                />
                <button className=" text-white ">
                 Add to Cart
                  </button>
                  </div>
                  </div>   
          </div>
          <div className='w-[1447px] h-[409px] ml-[236px] font-inter mt-14'>
           <div className='flex justify-between mt-14'>
           <div className='w-[401px] h-[34px] font-bold text-3xl  '>FEATURED PRODUCTS</div>
           <a href=""></a>
           </div>
            <div className='flex justify-between' >
            <div className='w-[270px] h-[306px] mt-14'>
            <div className='w-[270px] h-[263px] '>
            <Image
                  src="/images/greenchair.png"
                  alt="chair"
                  width={270}
                  height={263}
                />
            </div>
           <div className='flex justify-between items-center mt-3'>
           <div className='w-[141px] h-[21px] font-normal text-[#272343] leading-5'>Library Stool Chair</div>
           <div className='w-[28px] h-[17px] font-bold text-sm leading-4'>$99</div>
           </div>
            </div>

            <div className='w-[270px] h-[306px] mt-14'>
            <div className='w-[270px] h-[263px] '>
            <Image
                  src="/images/whitechair.png"
                  alt="chair2"
                  width={270}
                  height={263}
                />
            </div>
           <div className='flex justify-between items-center mt-3'>
           <div className='w-[141px] h-[21px] font-normal text-[#272343] leading-5'>Library Stool Chair</div>
           <div className='w-[28px] h-[17px] font-bold text-sm leading-4'>$99</div>
           </div>
            </div>
            <div className='w-[270px] h-[306px] mt-14'>
            <div className='w-[270px] h-[263px] '>
            <Image
                  src="/images/black.png"
                  alt="chair3"
                  width={270}
                  height={263}
                />
            </div>
           <div className='flex justify-between items-center mt-3'>
           <div className='w-[141px] h-[21px] font-normal text-[#272343] leading-5'>Library Stool Chair</div>
           <div className='w-[28px] h-[17px] font-bold text-sm leading-4'>$99</div>
           </div>
            </div>
            <div className='w-[270px] h-[306px] mt-14'>
            <div className='w-[270px] h-[263px] '>
            <Image
                  src="/images/orangechair.png"
                  alt="chair4"
                  width={270}
                  height={263}
                />
            </div>
           <div className='flex justify-between items-center mt-3'>
           <div className='w-[141px] h-[21px] font-normal text-[#272343] leading-5'>Library Stool Chair</div>
           <div className='w-[28px] h-[17px] font-bold text-sm leading-4'>$99</div>
           </div>
            </div>
            <div className='w-[270px] h-[306px]  mt-14'>
            <div className='w-[270px] h-[263px] '>
            <Image
                  src="/images/wingchair.png"
                  alt="chair5"
                  width={270}
                  height={263}
                />
            </div>
           <div className='flex justify-between items-center mt-3'>
           <div className='w-[141px] h-[21px] font-normal text-[#272343] leading-5'>Library Stool Chair</div>
           <div className='w-[28px] h-[17px] font-bold text-sm leading-4'>$99</div>
           </div>
            </div>

            </div>
       </div>  
       
    </div>
  )
}

export default chairs

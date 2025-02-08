"use client"
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Products } from "../../../../types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Feature from "@/app/components/Features/page";
import Swal from "sweetalert2";
import { addtoCart } from "@/app/actions/action";

interface ProductPageProps {
  params: { chairs: string };
}
async function getProduct(chairs: string): Promise<Products | null> {
  return client.fetch(
    groq`*[_type == "products" && slug.current == "${chairs}"][0] {
    _id,
    title,
    description,
    price,
    _type,
     badge,
    image,
    }`
  );
}

 const handleAddToCart = (e: React.MouseEvent, products: Products)=>{
      e.preventDefault()
     Swal.fire({
        position: 'top',
        icon: 'success',
        title: `${products.title} added to cart`,
        showConfirmButton: false,
        timer: 1500

     })
          addtoCart(products);
      }



export default async function ProductPage({ params }: ProductPageProps) {
  const { chairs } = params;
  const products = await getProduct(chairs);
  if (!products) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <div className=" flex lg:w-[83%] mx-auto gap-20 h-[607px]  mt-[40px] font-inter overflow-hidden">
        <div className="w-[675px] h-[607px]">
          <div>
            {products.image && (
              <Image
                src={urlFor(products.image).url()}
                alt={products.title}
                width={675}
                height={607}
              />
            )}
          </div>
        </div>
        <div className="w-[675px] h-[607px] ">
          <div className="text-[#272343] w-[541px]  font-inter font-bold text-6xl">
            {products.title}
          </div>
          <div className= "bg-[#01AD5A] w-20 h-8  mt-5 text-white text-sm font-medium capitalize text-center py-2 rounded-[4px]">
                  {products.badge}
                </div>
          <div className=" mt-8 ml-1">
            <button className="w-[118px] h-[44px] bg-[#029FAE] text-white rounded-full hover:bg-[#307075] transition">
              ${products.price}.00 USD
            </button>
          </div>
          <hr className="mt-10" />
          <div className="w-[543px] h-[101px] mt-5">
            <p className="opacity-60 text-[#272343] font-normal text-xl">
              {products.description}
            </p>
          </div>
          <div
            className="flex items-center mt-5  py-[14px] px-[24px] gap-5 font-semibold text-xl bg-[#029FAE] w-[212px] h-[63px] 
                rounded-lg ml-1 hover:scale-105 transition duration-100 ease-in-out">
            <button className="text-white" onClick={(e) => handleAddToCart(e, products)}>Add to Cart</button>
         
          </div>
        </div>
      </div>
      <div className="font-inter mt-10">
        <div className="flex justify-between">
          <Feature /> 
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allCategories, allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Categories from "../../../../types/category";

const AllCategories = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Categories[] = await client.fetch(allCategories);
      setCategories(fetchedProducts);
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <div className=" lg:pb-[80px]  lg:w-[83%] mx-auto mt-16">
      <div className="text-2xl pb-[40px] text-center lg:text-left">
        <h1 className='font-inter font-semibold text-[32px] text-[#272343]'>Wooden Chairs</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {categories.map((categories) => (
            <div
              key={categories._id}
              className="relative w-full border rounded-lg shadow-md p-1 hover:shadow-lg transition duration-200"
            >
              {categories._id && (
                <div className="absolute top-2 left-[132px] sm:left-[20px] md:left-8 lg:left-2 bg-[#01AD5A] text-white text-xs font-medium capitalize px-2 py-1 rounded-[4px]">
                  {categories.products}
                </div>
              )}

              {categories.image && (
                <Image
                  src={urlFor(categories.image).url()}
                  alt={categories.title}
                  width={312}
                  height={312}
                  className="object-cover rounded-md w-full"
                />
              )}
              <h2 className="text-sm font-bold text-gray-800 p-1 hover:text-[#007580]">
                {categories.title}
              </h2>
              <p className="text-[#272343] px-2">
                ${categories.tags ? `${categories.tags}` : "Price not Available"}
              </p>
          {/* Add to Cart Button */}
          <button className="absolute bottom-2 right-2 bg-[#F0F2F3] hover:bg-[#007580] text-white p-2 rounded-md">
            <Image
              src="/images/cart.png"
              alt="cart"
              width={22}
              height={22}
            />
          </button>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;

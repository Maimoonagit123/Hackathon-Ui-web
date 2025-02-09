"use client";
import { useEffect, useState } from "react";``
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allCategories } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Categories from "../../../types/category";

const TopCategories = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    async function fetchCategory() {
      const fetchedCategory: Categories[] = await client.fetch(allCategories);
      setCategories(fetchedCategory);
    }
    fetchCategory();
  }, []);
  return (
    <div className="w-[83%] max-w-[1280px] mx-auto font-inter mt-10 lg:mt-24">
      {/* title */}
      <div className="text-center lg:text-left">
        <h1 className="text-[#272343] text-[24px] sm:text-[28px] md:text-[32px] leading-[1.2]">
          Top Categories
        </h1>
      </div>
      {/* Categories Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:mt-10">
        {/* Category 1 */}
        {categories.map((category) => (
          <div
            key={category._id}
            className="relative w-full h-[300px] sm:h-[350px] lg:h-[424px] hover:scale-95 rounded-[10px] overflow-hidden"
          >
            <Link href={`/topcat/${category.slug.current}`}>
              {category.image && (
                <>
                  <Image
                    src={urlFor(category.image).url()}
                    alt={category.title}
                    width={424}
                    height={424}
                    className="object-cover rounded-md w-full"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 flex flex-col justify-end p-5">
                    <h3 className="text-white text-lg font-semibold">
                      {category.title}
                    </h3>
                    <p className="text-white text-sm">
                      {category.products? `${category.products} products`
                        : "Price not Available"}
                    </p>
                  </div>
                </>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;

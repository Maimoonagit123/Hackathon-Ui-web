"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Products } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { ourProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addtoCart } from "../actions/action";
import Swal from "sweetalert2";
const OurProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Products[] = await client.fetch(ourProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

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

  return (
    <div>
      <div className="lg:pb-[80px] lg:w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-2xl pb-[40px] mt-24 md:text-center text-left">
          <h1 className="font-inter font-semibold text-[32px] leading-[35.2px] w-full text-[#272343] mt-14">
            Our Products
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10">
          {products.map((products) => (
            <div
              key={products._id}
              className="relative w-full border rounded-lg shadow-md p-1 hover:shadow-lg transition duration-200"
            >
              {products.badge && (
                <div className="absolute top-2 left-[132px] sm:left-[20px] md:left-8 lg:left-2 bg-[#01AD5A] text-white text-xs font-medium capitalize px-2 py-1 rounded-[4px]">
                  {products.badge}
                </div>
              )}
              <Link href={`/product/${products.slug.current}`}>
              {products.image && (
                <Image
                  src={urlFor(products.image).url()}
                  alt={products.title}
                  width={312}
                  height={312}
                  className="object-cover rounded-md w-full"
                />
              )}
              <h2 className="text-sm font-bold text-gray-800 p-1 hover:text-[#007580]">
                {products.title}
              </h2>
              <p className="text-[#272343] px-2">
                ${products.price ? `${products.price}` : "Price not Available"}
              </p>
              </Link>
              {/* Add to Cart Button */}
              <button className="absolute bottom-2 right-2 bg-[#F0F2F3] hover:bg-[#007580] text-white p-2 rounded-md"
                onClick={(e) => handleAddToCart(e, products)}>
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

export default OurProducts;

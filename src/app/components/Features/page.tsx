"use client";
import React, { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Products } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, featuredProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { addtoCart } from "@/app/actions/action";
import Swal from "sweetalert2";
import { Slider } from '@mui/material';

const Feature = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [priceRange, setPriceRange] = useState<number>(500)

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Products[] = await client.fetch(featuredProducts);
      setProducts(fetchedProducts);
      setFilteredProducts(products)
    }
    fetchProducts();
  }, []);

  useEffect(()=>{
    const filtered = products.filter(products => products.price <= priceRange);
    setFilteredProducts(filtered)
  },[priceRange, allProducts])
  
    const handleAddToCart = (e: React.MouseEvent, products: Products)=>{
      e.preventDefault()
     Swal.fire({
        position: 'top',
        icon: 'success',
        title: `${products.title} added to cart`,
        showConfirmButton: false,
        timer: 1500

     })
      addtoCart(products)
      
      const handlePrice = (e: React.ChangeEvent <HTMLInputElement>)=>{
        setPriceRange(Number(e.target.value))
      }
    }
  return (
    <>
                {/* <!-- Price Filter --> */}
            <div className="mt-6">
                <h2 className="text-xl font-bold">Filter by Price</h2>
                <input type="range" min="50" max="1000" value="500" className="w-full mt-2" id="priceRange"/>
                <p className="text-gray-500 text-sm">Price: $<span id="priceValue">500</span></p>
            </div>
      <div className="px-4 mx-auto md:w-[85%]">
        <div className="pb-[40px] text-center  lg:text-left">
          <h1 className="w-[286px] h-[35px] font-inter font-bold text-[32px] leading-[35.2px] text-[#272343]">
            Featured Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {products.map((products) => (
              <div
                key={products._id}
                className="border rounded-lg shadow-md p-1 hover:shadow-lg transition duration-200">
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
                <div>
                <h2 className=" text-sm font-bold p-1  hover:text-[#007580]">
                  {products.title}
                </h2>
                <div className="flex justify-between" >
                <p className=" text-[#272343]  px-2 ">
                  $
                  {products.price ? `${products.price}` : "Price not Available"}
                </p>
                <button className="hover:bg-[#007580] rounded-md right-2 bottom-4 relative text-white text-sm p-2 " 
                 onClick={(e)=>handleAddToCart(e,products)}>
                  <Image
                   src={"/images/cart.png"}
                   alt="cart"
                   width={22}
                   height={22}
                   />
                </button>
                </div>
                </div>
                </Link>
                {/* Add to Cart Button */}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;

"use client";
import React, { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { Products } from "../../../types/products";
import { getCartItems, removeFromCart, updateCart } from "../actions/action";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleremove = (id: string) => {
    Swal.fire({
      position: "top",
      icon: "warning",
      title: "Are you sure you want to remove this item?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Your item has been removed from the Cart",
          "success"
        );
      }
    });
  };

  const handleQuantity = (id: string, quantity: number) => {
    updateCart(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantity(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantity(id, product.inventory - 1);
    }
  };

  const totalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };
const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your Order has been placed successfully",
          "success"
        );
        router.push("/checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="w-full max -w-[1440px]font-inter mx-auto  px-4 md:px-6 lg:px-8 my-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-8">Shopping Bag</h2>
          {cartItems.length === 0 && (
            <p className="text-center text-gray-500">Your Cart is empty</p>
          )}
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-wrap md:flex-nowrap gap-6 border-b pb-6 mb-6"
            >
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  height={150}
                  width={150}
                />
              )}

              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <div className="text-lg font-medium">MRP: ${item.price}</div>
                </div>
                <p className="text-sm text-gray-500">{item.type}</p>
                <div className="flex justify-between mt-2 text-gray-500 text-sm">
                  <div>Quantity: {item.inventory}</div>
                  <div>Quantity: {item.inventory}</div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button onClick={() => handleremove(item._id)}>
                    <Image
                      src="/images/dustbin.png"
                      alt="Remove"
                      height={19}
                      width={19}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full  p-6 border rounded-lg shadow-md  lg:w-[350px] ">
          <h3 className="font-inter font-bold text-center lg:text-left text-lg sm:text-xl">
            Order Summary
          </h3>
          <br />
          <div className="flex justify-between text-base mb-2">
            <span className="font-bold ">Total Price:</span>
            <span>${totalPrice()}</span>
          </div>
          <div className="flex justify-between  mt-5">
            <h2 className="text-sm sm:text-base  text-gray-500">
              Estimated Delivery 
              And <br /> Handling
            </h2>
            <div className="text-sm sm:text-base">Free</div>
          </div>
          <button
            onClick={handleProceed}
            className="rounded-full font-inter font-medium text-white bg-[#029FAE] w-full h-12
             mt-5 hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

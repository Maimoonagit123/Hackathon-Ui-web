"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Products } from "../../../types/products";
import { getCartItems, removeFromCart, updateCart } from "../actions/action";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { CgChevronRight } from "react-icons/cg";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import "sweetalert2/dist/sweetalert2.min.css";

const Checkout = () => {
  const [checkItems, setCheckItems] = useState<Products[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValue, setFormValue] = useState({
    Firstname: "",
    LastName: "",
    Email: "",
    Address: "",
    City: "",
    PostalCode: "",
    Country: "",
    Phone: "",
    Comments: "",
  });

  const [formErrors, setFormErrors] = useState({
    Firstname: false,
    LastName: false,
    Email: false,
    Address: false,
    City: false,
    PostalCode: false,
    Country: false,
    Phone: false,
    Comments: false,
  });

  useEffect(() => {
    setCheckItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = checkItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {
      Firstname: !formValue.Firstname,
      LastName: !formValue.LastName,
      Email: !formValue.Email,
      Address: !formValue.Address,
      City: !formValue.City,
      PostalCode: !formValue.PostalCode,
      Country: !formValue.Country,
      Phone: !formValue.Phone,
      Comments: !formValue.Comments,
    };
    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing Your Order..",
      text: "Please wait a moment",
      icon: "success",
      showConfirmButton: true,
      showLoaderOnConfirm: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Success",
            "Your Order has been successfully placed",
            "success"
          );
        } else {
          Swal.fire("Error", "Please fill in all the required fields", "error");
        }
      }
    });
    const orderData = {
      _type: "order",
      FirstName: formValue.Firstname,
      LastName: formValue.LastName,
      Email: formValue.Email,
      Address: formValue.Address,
      City: formValue.City,
      PostalCode: formValue.PostalCode,
      Country: formValue.Country,
      Phone: formValue.Phone,
      Comments: formValue.Comments,
      checkItems: checkItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      subTotal: subTotal,
      discount: discount,
      orderDate: new Date().toISOString,
    };
    try {
      await client.create(orderData);
      localStorage.removeItem("Applied Discount");
    } catch (error) {
      console.error("Error,", error);
    }
  };

  // handlequantity
  const handleQuantity = (id: string, quantity: number) => {
    updateCart(id, quantity);
    setCheckItems(getCartItems());
  };

  //   Handleincrement
  const handleIncrement = (id: string) => {
    const product = checkItems.find((item) => item._id === id);
    if (product) {
      handleQuantity(id, product.inventory + 1);
    }
  };
  // handle decrement
  const handleDecrement = (id: string) => {
    const product = checkItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantity(id, product.inventory - 1);
    }
  };
  //   Remove the product
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
        setCheckItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Your item has been removed from the Cart",
          "success"
        );
      }
    });
  };
  //   Handleplaceorder

  return (
    <div className="min-h-screen font-poppins bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex gap-3 border-b">
          <Link href={"/cart"}>
            <h2 className="text-3xl font-bold  pb-4">Your Cart</h2>
          </Link>
          <CgChevronRight className="mt-3" />
          <span className="mt-2">CheckOut</span>
          <h2 className="text-center ml-[200px] font-bold text-lg mt-1">
            Price
          </h2>
          <h2 className="text-center ml-[200px] font-bold text-lg mt-1">
            Quantity
          </h2>
          <h2 className="text-center ml-[180px] font-bold text-lg mt-1">
            Total Price
          </h2>
        </div>

        {/* Cart Items */}

        <div className="mt-6 space-y-4">
          {checkItems.length > 0 ? (
            checkItems.map((item) => (
              <div
                key={item._id} 
                className="flex flex-col md:flex-row justify-between items-center border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="object-cover rounded"
                    />
                  )}
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-gray-500">{item.badge}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold ">${item.price}</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 border rounded"
                    onClick={() => handleIncrement(item._id)}
                  >
                    +
                  </button>
                  <span>{item.inventory}</span>
                  <button
                    className="px-3 py-1 border rounded"
                    onClick={() => handleDecrement(item._id)}
                  >
                    _
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
                <p className="text-lg font-semibold mr-20">
                  ${item.price * item.inventory}
                </p>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Coupon and Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-between">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border p-2 rounded w-40"
            />
            <button className="bg-teal-800 hmt-5 hover:scale-90 transition-transform duration-200 ease-in-out  text-white px-4 py-2 rounded">
              Apply
            </button>
          </div>
          <div className="space-x-2 mt-4 md:mt-0">
            <Link href={"/cart"}>
              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:scale-90 transition-transform duration-200 ease-in-out">
                Update Cart
              </button>
            </Link>
            <Link href={"/product"}>
              <button className="border px-4 py-2 rounded hover:scale-90 transition-transform duration-200 ease-in-out">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold border-b pb-2">Cart Totals</h3>
          <div className="flex justify-between mt-2">
            <span>Subtotal:</span>
            <span>${subTotal}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Discount:</span>
            <span>${discount}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping:</span>
            <span>$5</span>
          </div>
          <div className="flex justify-between mt-2 font-bold text-lg">
            <span>Total:</span>
            <span>
              $
              {checkItems.reduce(
                (total, item) => total + item.price * item.inventory,
                +5
              )}
            </span>
          </div>
          <button
            className="mt-4 w-full bg-teal-800 text-white py-2 rounded"
            onClick={() => {
              document
                .getElementById("billing-information")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Form */}

      <div className="bg-gray-100">
        <div
          id="billing-information"
          className="max-w-6xl mx-auto p-6 bg-white shadow-lg mt-10 rounded-lg"
        >
          <h1 className="text-3xl font-bold">Billing Information</h1>
          <p className="text-right text-lg font-medium">
            Subtotal :{" "}
            <span className="text-black font-semibold">
              ${" "}
              {checkItems.reduce(
                (total, item) => total + item.price * item.inventory,
                +5
              )}
            </span>
          </p>

          <div className="mt-6">
            <div className="border-l-4 border-black pl-4 pb-4">
              <h2 className="text-xl font-bold">Shipping address</h2>
              <p className="text-sm text-gray-600">
                Address lookup powered by Google, view{" "}
                <a href="/faqs" className="text-blue-700">
                  Privacy policy
                </a>
                .
              </p>
              <form className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    id="Firstname"
                    type="text"
                    placeholder="First Name *"
                    onChange={handleInputChange}
                    value={formValue.Firstname}
                    className="border p-2 w-full"
                    required
                  />
                  {formErrors.Firstname && <p>First Name is required</p>}
                  <input
                    id="LastName"
                    type="text"
                    placeholder="Last Name *"
                    onChange={handleInputChange}
                    value={formValue.LastName}
                    className="border p-2 w-full"
                    required
                  />
                  {formErrors.Firstname && <p>Last Name is required</p>}
                </div>
                <input
                  id="Address"
                  type="text"
                  placeholder="Address 1 - Street or P.O. Box *"
                  onChange={handleInputChange}
                  value={formValue.Address}
                  className="border p-2 w-full"
                  required
                />
                {formErrors.Address && <p>Address is required</p>}
                <input
                  type="text"
                  placeholder="Address 2 - Apt, Suite, Floor"
                  onChange={handleInputChange}
                  value={formValue.Address}
                  className="border p-2 w-full"
                />
                {formErrors.Address && <p>Address is required</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    id="PostalCode"
                    type="text"
                    placeholder="ZIP Code *"
                    onChange={handleInputChange}
                    value={formValue.PostalCode}
                    className="border p-2 w-full"
                    required
                  />
                  {formErrors.PostalCode && <p>Postal is required</p>}
                  <input
                    id="City"
                    type="text"
                    placeholder="City *"
                    onChange={handleInputChange}
                    value={formValue.City}
                    className="border p-2 w-full"
                    required
                  />
                  {formErrors.City && <p>City is required</p>}
                  <select id="Country" className="border p-2 w-full" required>
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                    <option value="South Africa">South Africa</option>
                  </select>
                </div>
                <input
                  id="Phone"
                  type="text"
                  placeholder="Phone *"
                  onChange={handleInputChange}
                  value={formValue.Phone}
                  className="border p-2 w-full"
                  required
                />
                {formErrors.Phone && <p>Phone is required</p>}
                <textarea
                  id="Comments"
                  placeholder="Comments"
                  className="border p-2 w-full"
                ></textarea>
                {formErrors.Phone && <p>comments is required</p>}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 mt-4"
                  onClick={handlePlaceOrder}
                >
                  Continue to shipping method
                </button>
              </form>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold">Shipping method</h2>
              <p className="text-gray-500">
                (Select shipping method at next step)
              </p>
              <select className="border p-2 w-full mt-2">
                <option>Standard Shipping (5-7 days)</option>
                <option>Express Shipping (2-3 days)</option>
                <option>Overnight Shipping (1 day)</option>
              </select>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold">Payment</h2>
              <p className="text-gray-500">
                (Enter payment details at next step)
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold">Review & place order</h2>
              <p className="text-gray-500">(Review and confirm your order)</p>
            </div>
          </div>
        </div>
      </div>

      {/* form end */}
    </div>
  );
};

export default Checkout;

import React from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-10">
        <div className="col-span-2">
          {[1, 1, 2, 3, 4, 5].map((item) => (
            <div className="mb-5 ">
              <CartItem />
            </div>
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-6 rounded-md shadow-lg ">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹ 3000</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-₹ 2499</span>
              </div>
              <div className="flex justify-between pt-3  text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">free</span>
              </div>
              <br />
              <hr />
              <div className="flex justify-between pt-3   text-black">
                <span>Total Amount</span>
                <span className="text-green-600">₹ 2550</span>
              </div>
            </div>
            <button
              onClick={() => handleCheckout()}
              type="submit"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

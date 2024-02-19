import React, { useEffect } from "react";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { downloadFromFirebase } from "../../utils/firebase/firebase.utils";
import getStripe from "../../utils/stripe/stripe.utils";
// get stripe session from stripe API
export const Success = () => {
  const cartItems = useSelector(selectCartItems);
  const queryParams = new URLSearchParams(window.location.search);
  const value = queryParams.get("session_id");
  console.log(value);
  useEffect(() => {
    const getLineItems = async () => {
      const stripe = await getStripe();
      const lineItems = await stripe.checkout;
      console.log("LINE ITEMS: ", lineItems);
    };
    getLineItems();
  }, []);
  return (
    <div className="container">
      <div className="flex items-center align-center">
        <h1 className="text-5xl">THANK YOU FOR YOUR PURCHASE</h1>
      </div>

      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap -m-4">
          {cartItems.map((cartItem) => {
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={cartItem.name}
                    class="object-cover object-center w-full h-full block"
                    src={cartItem.imageUrl}
                  />
                </a>
                <div className="mt-4 flex justify-between m-2">
                  <h2 className="text-gray-900 title-font text-lg font-medium flex">
                    {cartItem.name}
                  </h2>
                </div>
                <button
                  className=" max-width text-black border-2 border-black py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded"
                  onClick={() => downloadFromFirebase(cartItem.fileName)}
                >
                  Download Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

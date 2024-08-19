import React from "react";

const Cart = () => {
  return (
    <div className="mt-32 p-4 lg:absolute lg:right-0 w-96 md:w-80 lg:w-80 xl:w-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 sm:gap-4 lg:gap-10">
          <button className="flex bg-white rounded-md p-2">
            <img className="mr-2" src="/payment.png" alt="" />
          </button>
          <button className="flex bg-white rounded-md p-2">
            <img className="mr-2" src="/order.png" alt="" />
          </button>
          <button className="flex bg-white rounded-md p-2">
            <img className="mr-2" src="/history.png" alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-2 mb-2 p-4 bg-[linear-gradient(to_bottom_right,#F98443,#F84775)] rounded">
        <span className="text-lg text-white font-semibold">New Order</span>
        <span className="text-sm text-white">Date</span>
      </div>
      <div className="border-b pb-2 px-4">
        {["Pasta", "Rice", "Milk", "Fires"].map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2 lg:mb-4">
            <div className="flex items-center space-x-2">
            <img src="/cartpic.png" alt="" className="hidden md:block w-6 h-6 md:w-4 md:h-4" />
              <div>
                <p className="text-gray-700">{item}</p>
                <p className="text-gray-500 text-sm">$ 100</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-gray-700">$ 100</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white border-t pt-2 px-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$ 600</p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700">Day Event</p>
          <p className="text-red-500">-20%</p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700">Total</p>
          <p className="text-red-500 font-bold">$ 500</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-2">
          <button className="flex h-12 text-red-600 border border-red-600 rounded p-4 space-x-4 w-full sm:w-32 items-center justify-center">
            <img src="/save.png" alt="" />
            <div>Save</div>
          </button>
          <button className="flex h-12 bg-green-500 text-white rounded p-4 w-full sm:w-56 items-center justify-center space-x-4">
            <img src="/paynow.png" alt="" />
            <div>Pay now</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
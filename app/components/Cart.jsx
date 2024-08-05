import React from "react";

const Cart = () => {
  return (
    <div className="mt-36 absolute right-0">
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          <button className="flex bg-white rounded-md p-2">
            {" "}
            <img className="mr-2" src="/payment.png" alt="" />
          </button>
          <button className="flex bg-white rounded-md p-2">
            {" "}
            <img className="mr-2" src="/order.png" alt="" />{" "}
          </button>
          <button className="flex bg-white rounded-md p-2">
            <img className="mr-2" src="/history.png" alt="" />{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4 mb-4 p-4 bg-[linear-gradient(to_bottom_right,#F98443,#F84775)] rounded">
        <span className="text-lg text-white font-semibold">New Order</span>
        <span className="text-sm text-white">Date</span>
      </div>
      <div className="border-b pb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <img src="/cartpic.png" alt="" className="w-4 h-4" />
            <div>
              <p className="text-gray-700">Pasta </p>
              <p className="text-gray-500 text-sm">$ 100</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-700">$ 100</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <img src="/cartpic.png" alt="" className="w-4 h-4" />
            <div>
              <p className="text-gray-700">Rice</p>
              <p className="text-gray-500 text-sm">$ 100</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-700">$ 100</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <img src="/cartpic.png" alt="" className="w-4 h-4" />
            <div>
              <p className="text-gray-700">Milk</p>
              <p className="text-gray-500 text-sm">$ 100</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-700">$ 100</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/cartpic.png" alt="" className="w-4 h-4" />
            <div>
              <p className="text-gray-700">Fires</p>
              <p className="text-gray-500 text-sm">$ 100</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-700">$ 100</p>
          </div>
        </div>
      </div>
      <div className=" bg-white border-t pt-4">
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
        <div className="flex space-x-2 m-4 mb-4">
          <button className="flex text-red-600 border border-red-600 rounded p-4 space-x-4 w-32 items-center">
            <div><img src="/save.png" alt="" /></div>
            <div>Save</div>
          </button>
          <button className="flex bg-green-500 text-white rounded p-4 w-64 items-center space-x-8">
          <div><img src="/paynow.png" alt="" /></div>
          <div>Pay now</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-white-800 border-2 p-6 rounded-md h-28 ">
      <div>
        <h2 className="text-lg font-bold">FOODS</h2>
        <div>
          <p>cak banu foods and beverages</p>
        </div>
      </div>
      <div className="flex space-x-8">
        <img src="/search.png" alt="" />
        <img src="/line.png" alt="" />
        <input
          type="text"
          placeholder="search or scan items"
          className="border-none"
        />
      </div>

      <div>
        <img src="/scan.png" alt="" />{" "}
      </div>

      <div className="flex space-x-4">
        <button className="flex items-center bg-orange-500 w-36 p-2 rounded-md">
          <img className="mr-2 w-8 h-8" src="/oval.png" alt="" />
          Buy Roka
        </button>
      </div>
      <div>
        {" "}
        <img src="/settings.png" alt="" />
      </div>
    </div>
  );
};

export default NavBar;

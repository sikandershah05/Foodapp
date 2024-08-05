import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-white-800 border-2 p-6 rounded-md h-24 w-[85%] bg-white my-4 ms-4 absolute right-0">
      <div>
        <h1 className="text-3xl font-bold">Foods</h1>
        <div>
          <p>Cak banu foods and beverages</p>
        </div>
      </div>
      <div className="flex space-x-6 items-center">
        <img src="/search.png" alt="" className="w-6 h-6" />
        <img src="/line.png" alt="" />
        <input
          type="text"
          placeholder="search or scan items"
          className="border-none"
        />
      </div>

      
<div className="flex items-center space-x-10">
<div className="mr-16">
        <img src="/scan.png" alt="" />{" "}
      </div> 
      <div className="flex space-x-6">
        <button className="flex items-center bg-[linear-gradient(to_bottom_right,#F98443,#F84775)] w-36 p-2 text-sm rounded-md text-white">
          <img className="mr-4 w-8 h-8" src="/oval.png" alt="" />
          Buy Roka
        </button>
      </div>
      <div>
        {" "}
        <img src="/settings.png" alt="" />
      </div>
      </div>
    </div>
  );
};

export default NavBar;

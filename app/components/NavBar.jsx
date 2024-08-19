import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between bg-white-800 border-2 p-4 md:p-6 rounded-md w-[70%] md:w-auto lg:w-[85%] h-auto bg-white my-4 ms-4 absolute right-0">
      <div className="hidden md:block">
        <h1 className="text-lg lg:text-3xl font-bold">Foods</h1>
        <div>
          <p className="text-sm">Cak banu foods and beverages</p>
        </div>
      </div>
      <div className="flex space-x-2 lg:space-x-8 items-center">
        <img src="/search.png" alt="" className="w-4 h-4 lg:w-6 lg:h-6" />
        <img src="/line.png" alt="" className="hidden md:block" />
        <input
          type="text"
          placeholder="search or scan items"
          className="border-none"
        />
      </div>

      
<div className="flex items-center space-x-2 md:space-x-4 lg:space-x-10">
<div>
        <img src="/scan.png" alt="" className="w-4 h-4 lg:w-6 lg:h-6"/>
      </div> 
      <div className="flex space-x-2 lg:space-x-6">
        <button className="flex items-center bg-[linear-gradient(to_bottom_right,#F98443,#F84775)] w-18 lg:w-36 p-2 text-sm rounded-md text-white">
          <img className="mr-2 lg:mr-4 w-4 h-4 lg:w-8 lg:h-8" src="/oval.png" alt="" />
          <span className="text-sm">Buy Roka</span>
        </button>
      </div>
      <div>
       
        <img src="/settings.png" alt="" className="w-4 h-4 lg:w-6 lg:h-6" />
      </div>
      </div>
    </div>
  );
};

export default NavBar;

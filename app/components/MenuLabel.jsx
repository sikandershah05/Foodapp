import React from "react";

const MenuLabel = () => {
  return (
    <>
    <div className="flex space-x-4 items-center w-auto h-40 mt-14 md:ml-8 md:mt-20">
      <div>
        <p className="text-sm md:text-lg">Choose Category</p>
        <h1 className="text-sm md:text-lg font-bold"> Foods</h1>
      </div>
<div>
    <img src="/Arrow.png" alt="" />
</div>
      <div>
        <p className="text-sm md:text-lg" >Choose Sub Category</p>
        <h1 className="text-sm md:text-lg font-bold"> Regular </h1>
      </div>
    </div>

    </>
  );
};

export default MenuLabel;

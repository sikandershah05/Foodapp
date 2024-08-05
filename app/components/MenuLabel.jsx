import React from "react";

const MenuLabel = () => {
  return (
    <>
    <div className="flex space-x-4 items-center h-40 ml-8 mt-20">
      <div>
        <p>Choose Category</p>
        <h1 className="text-lg font-bold"> Foods</h1>
      </div>
<div>
    <img src="/Arrow.png" alt="" />
</div>
      <div>
        <p>Choose Sub Category</p>
        <h1 className="text-lg font-bold"> Regular </h1>
      </div>
    </div>

    </>
  );
};

export default MenuLabel;

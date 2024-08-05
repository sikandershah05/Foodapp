import React from "react";

const DishCard = () => {
  const Dishes = [
    { name: "Pasta", price: 100 },
    { name: "Rice", price: 100 },
    { name: "Curry", price: 100 },
    { name: "Bread", price: 100 },
    { name: "Naan", price: 100 },
    { name: "Chicken", price: 100 },
    { name: "Milk", price: 100 },
  ];
  return (
    <>
      <div className="ml-8">
        <div className="grid grid-cols-3 gap-8">
          {Dishes.map((Dish) => (
            <div
              key={Dish.name}
              className="border rounded-lg w-56 h-60 bg-[#979797]"
            >
              <div>
                <div className="bg-[linear-gradient(to_bottom_right,#F98443,#F84775)] p-2 m-4 text-white w-24 text-center rounded">
                  <h2>$ {Dish.price}</h2>
                </div>
                <div className="bg-white p-2 m-4 w-42 rounded font-bold text-sm">
                  <h4> {Dish.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DishCard;

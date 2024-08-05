'use client';
import React, { useState } from "react";

const menus = [
  {
    name: "Foods",
    icon: "/food.png",
    subMenus: [
      { name: "Chicken", icon: "/chicken.png" },
      { name: "Sea Food", icon: "/seafood.png" },
      { name: "Pizza", icon: "/pizza.png" },
      { name: "Pasta", icon: "/pasta.png" },
    ],
  },
  {
    name: "Drinks",
    icon: "/drinks.png",
    subMenus: [
      { name: "Chicken", icon: "/chicken.png" },
      { name: "Sea Food", icon: "/seafood.png" },
      { name: "Pizza", icon: "/pizza.png" },
      { name: "Pasta", icon: "/pasta.png" },
    ],
  },
  {
    name: "Snack",
    icon: "/snacks.png",
    subMenus: [
      { name: "Chicken", icon: "/chicken.png" },
      { name: "Sea Food", icon: "/seafood.png" },
      { name: "Pizza", icon: "/pizza.png" },
      { name: "Pasta", icon: "/pasta.png" },
    ],
  },
  {
    name: "Dessert",
    icon: "/dessert.png",
    subMenus: [
      { name: "Chicken", icon: "/chicken.png" },
      { name: "Sea Food", icon: "/seafood.png" },
      { name: "Pizza", icon: "/pizza.png" },
      { name: "Pasta", icon: "/pasta.png" },
    ],
  },
  {
    name: "Package",
    icon: "/package.png",
    subMenus: [
      { name: "Chicken", icon: "/chicken.png" },
      { name: "Sea Food", icon: "/seafood.png" },
      { name: "Pizza", icon: "/pizza.png" },
      { name: "Pasta", icon: "/pasta.png" },
    ],
  },
];

function SideNav() {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <div className="w-24 h-screen bg-white relative mr-24">
      <div className="flex flex-col items-center py-4 ">
        <img src="/logo.png" alt="Logo" className="mb-4" />
        <div className="py-3 px-6">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className="p-2 w-20 h-20 rounded-lg hover:bg-[linear-gradient(to_bottom_right,#F98443,#F84775)] flex flex-col items-center justify-center transition duration-300"
              onClick={() => setHoveredMenu(menu.name)}
            >
              <img
                src={menu.icon}
                alt={menu.name}
                className="w-10 h-10 filter hover:brightness-100 hover:invert"
              />
              {hoveredMenu === menu.name && (
                <div className="absolute left-full w-20 mt-16 bg-[linear-gradient(180deg,#F98443,#F84775)] shadow-lg rounded-lg p-2 flex flex-col items-center">
                  {menu.subMenus.map((subMenu) => (
                    <img 
                      key={subMenu.name}
                      src={subMenu.icon}
                      alt={subMenu.name}
                      className="w-10 h-10 my-4 hover:bg-grey-200"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideNav;

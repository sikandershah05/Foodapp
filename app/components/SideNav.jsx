"use client";
import React, { useState, useEffect } from "react";

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

  const handleOutsideClick = (event) => {
    if (
      !event.target.closest(".menu-item") &&
      !event.target.closest(".subMEnu")
    ) {
      setHoveredMenu(null);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="
    w-12 md:w-24 lg:w-24 h-screen bg-white relative mr-12 md:mr-16 lg:mr-24">
      <div className="flex flex-col items-center py-4 ">
        <img src="/logo.png" alt="Logo" className="mb-4 w-4 sm:w-4 md:w-8" />
        <div className="py-3 px-6">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className=" menu-item p-2 w-12 h-12 sm:w-12 sm:h-12 md:w-20 md:h-20  rounded-lg hover:bg-[linear-gradient(to_bottom_right,#F98443,#F84775)] flex flex-col items-center justify-center transition duration-300"
              onClick={() => setHoveredMenu(menu.name)}
            >
              <img
                src={menu.icon}
                alt={menu.name}
                className="w-6 h-6 sm:w-6 sm:h-6 md:w-10 md:h-10 filter hover:brightness-100 hover:invert"
              />
              {hoveredMenu === menu.name && (
                <div className=" submenu absolute left-full w-10 sm:w-10 md:w-20 mt-16 bg-[linear-gradient(180deg,#F98443,#F84775)] shadow-lg rounded-lg p-2 flex flex-col items-center">
                  {menu.subMenus.map((subMenu) => (
                    <img
                      key={subMenu.name}
                      src={subMenu.icon}
                      alt={subMenu.name}
                      className="w-6 h-6 sm:w-6 sm:h-6 md:w-10 md:h-10 my-4 hover:bg-grey-200"
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

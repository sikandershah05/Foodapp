import Image from "next/image";
import SideNav from "./components/SideNav";
import NavBar from "./components/NavBar";
import DishCard from "./components/DishCard";
import Cart from "./components/Cart";
import MenuLabel from "./components/MenuLabel";

export default function Home() {
  return (
      <div className="flex w-full">
        <SideNav />
        <NavBar />
        <div>
        <MenuLabel />
        <DishCard />
        </div>
        <Cart />
      </div>
    
  );
}

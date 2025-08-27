import { MenuIcon, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="w-[100%] h-20 bg-[#111827] ">
      <div className="flex items-center justify-between text-white px-8 h-20 ">
        {/* Logo */}
        <div className="flex items-center text-2xl font-semibold">
          <h1 className="font-syne">Keyword Pr</h1>
          <Search/>
        </div>
        {/* Menu */}
        <div>
          <MenuIcon className="text-3xl hover:text-[#60A5FA] duration-150" />
        </div>
      </div>
    </div>
  );
};

export default Header;

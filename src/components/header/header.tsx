
'use client'
import { navbarItems } from "@/data/navbar-items";
import NavbarItem from "./navbar-item";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import clsx from "clsx";
import { Switch } from "antd"
import { useTheme } from "@/utils/theme";
import {MoonFilled, SunFilled} from "@ant-design/icons"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleTheme = useTheme();
  return (
    <header className="w-screen bg-gray-200 overflow-hidden  dark:bg-gray-950 fixed md:max-h-auto">
      <nav className="container mx-auto flex justify-around items-center py-4 md: ">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          <Link href="/">M</Link>
        </div>
        <div className="flex flex-col space-x-4 md:flex-row text-center">
          <MenuOutlined onClick={toggleMenu} className="bg-gray-200 dark:bg-gray-950 text-gray-900 dark:text-gray-50 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer md:hidden"
          />
        </div>
        <ul className="hidden md:flex gap-8 flex-row text-center">
          {navbarItems.map((item, index) => (
            <NavbarItem key={index} title={item.title} path={item.path} />
          ))}
          <li>
            <Switch 
             onClick={handleTheme}
             defaultChecked
             checkedChildren={<MoonFilled className="text-gray-50 text-sm"/>}
             unCheckedChildren={<SunFilled className="text-gray-50 text-sm"/>}
             className="text-center"
            />
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
       <ul className={clsx(isMenuOpen ?"flex flex-col text-center mt-5 md:hidden" : "hidden", "text-center"
       )}>
          {navbarItems.map((item, index) => (
            <NavbarItem key={index} title={item.title} path={item.path} />
          ))}
           <li className="p-5">
            <Switch 
            onClick={handleTheme}
            defaultChecked
            unCheckedChildren={<SunFilled className="text-gray-50 text-sm"/>}
            checkedChildren={<MoonFilled className="text-gray-50 text-sm"/>}
            className="text-center"
            />
          </li>
        </ul>
    </header>
  );
};

export default Header;
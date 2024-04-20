import { navbarItems } from "@/data/navbar-items"
import NavbarItem from "./navbar-item"
import Link from "next/link"

const Header = () => {
  return (
    <header className="w-screen bg-gray-200 dark:bg-gray-950 fixed">
      <nav className="container mx-auto flex justify-around items-center py-4 md: ">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          <Link href="/">M</Link>
        </div>
        <ul className="flex flex-col space-x-4 md:flex-row text-center">
          {navbarItems.map((item, index) => ( 
           <NavbarItem key={index} title={item.title} path={item.path}/>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
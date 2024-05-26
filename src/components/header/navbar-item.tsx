import { NavbarItems } from "@/data/navbar-items"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Link from "next/link"


 const NavbarItem = ({title, path, index, toggleMenu}:NavbarItems) => {
    const linkActive = usePathname()
    return(
        <li key={index} className="p-5 md:p-0">
        <Link href={path} onClick={toggleMenu} className={clsx(
            "hover:text-gray-800 dark:hover:text-gray-50",
            linkActive === path ? "text-gray-950 border-b-2 border-sky-600 dark:text-gray-50 dark:border-b-2  dark:border-sky-800": "text-gray-950 dark:text-gray-300",
            "font-semibold text-base"  
        )}>
          {title}
        </Link>
      </li>
    )
}
export default NavbarItem


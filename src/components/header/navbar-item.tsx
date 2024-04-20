import { NavbarItems } from "@/data/navbar-items"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Link from "next/link"
 const NavbarItem = ({title, path, index}:NavbarItems) => {
    const linkActive = usePathname()
    return(
        <li key={index} className="pl-3">
        <Link href={path} className={clsx(
            "hover:text-gray-800 dark:hover:text-gray-50",
            linkActive === path ? "text-gray-800 border-b-2 border-sky-600 dark:text-gray-50 border-b-2  border-sky-800": "text-gray-400 dark:text-gray-300",
            "font-semibold text-base"  
        )}>
          {title}
        </Link>
      </li>
    )
}
export default NavbarItem


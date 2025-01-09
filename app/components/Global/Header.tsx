import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import NavSection from "./NavSection";
import Link from "next/link";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
      isActive: true,
    },
    {
      name: "Best Picks",
      href: "/best-picks",
      isActive: false,
    },
    {
      name: "Category 1",
      href: "/category-one",
      isActive: false,
    },
    {
      name: "Category 2",
      href: "/category-two",
      isActive: false,
    },
    {
      name: "More...",
      href: "/more",
      isActive: false,
    },
  ];
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 ">
        <Link href="/" className="flex items-start justify-start">
          <Image src={Logo} alt="Logo" height={48} className="h-12" />
        </Link>
        <div>
          {/* nav items here */}
          <div className="flex justify-start items-center">
            <nav className="flex flex-wrap justify-center items-center space-x-4 list-none text-sm font-normal">
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-sm font-normal hover:font-medium active:font-medium text-neutral-600 hover:text-neutral-900 active:text-sky-600 border-b-2 border-transparent active:border-sky-600 px-2 py-1"
                  >
                    <NavSection navItems={item} key={index} />
                  </li>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

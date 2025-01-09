import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/logo.svg";
import NavSection from "./NavSection";

const Footer = () => {
  const pageItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/",
    },
    {
      name: "Service",
      href: "/",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
    {
      name: "More...",
      href: "/more",
    },
  ];
  return (
    <div className="bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Footer content */}
        <div className="lg:flex justify-start items-start space-y-4 space-x-0 lg:space-y-0 lg:space-x-0 py-8">
          {/* left side content */}
          <div className="space-y-1 w-full">
            <Link href="/" className="flex items-start justify-start">
              <Image src={Logo} alt="Logo" height={48} className="h-20" />
            </Link>
            <p className="max-w-sm text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eum
              maxime id aliquam aut explicabo possimus, quisquam nemo maiores,
              et, dolorum cum labore rerum! Odit quae dolor voluptatem eos modi
              praesentium enim, quas dolore saepe alias animi inventore quia aut
              nihil ab voluptatum dignissimos maxime. Nihil culpa officiis
              similique iusto!
            </p>
          </div>

          {/* right side content */}
          <div className="w-full md:flex justify-start items-start space-y-4 space-x-0 md:space-y-0 md:space-x-8 py-8">
            <div className="w-full space-y-4">
              <h4 className="font-semibold text-xl text-neutral-900">Pages</h4>
              <nav className="flex flex-col flex-wrap justify-center items-start list-none text-sm font-normal">
                {pageItems.map((item, index) => {
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

            <div className="space-y-4 w-full">
              <h4 className="font-semibold text-xl text-neutral-900">
                Subscribe our Newsletter
              </h4>
              <input
                placeholder="Your Email Address"
                className="w-full px-3 py-2 border border-neutral-300"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {/* copyright text */}
        <div className="w-full text-center pt-4 pb-4 border-t border-neutral-300">
          <p className="text-sm font-normal">
            © 2024, All rights are reserved by
            <span className="font-medium text-sky-600"> SR Web Studio</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

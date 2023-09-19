import React from "react";
import { useRouter } from "next/router";
import logo from "../../assets/Logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  return (
    <header className="Container mx-auto flex items-center justify-between p-6 lg:px-8 bg-green">
      <div className="flex justify-start">
        <Image
          src={logo}
          alt="logo"
          className="w-85 md:w-64 mb-4 md:mb-0 pr-8"
        />
      </div>
      <nav>
        <ul className="flex space-x-4 md:pt-4 sm:pt-4">
          <li>
            <Link
              href={router.pathname === "/" ? "/Banks" : "/"}
              className="text-xl text-brown font-medium pr-4 md:text-xl sm:text-xl px-2 border-none hover:text-light hover:bg-transparent"
            >
              {router.pathname === "/" ? "Banks" : "Home"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

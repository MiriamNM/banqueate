import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Logo.png";

const Header = ({ onChange }) => {
  const router = useRouter();

  return (
    <header className="Container border-b border-silver mx-auto flex flex-col lg:flex-row items-center p-6 justify-between lg:px-8 bg-white">
      <div className="flex justify-start">
        <Image src={logo} alt="logo" width={300} height={300} />
      </div>
      <nav className="mt-6 lg:mt-0">
        <ul className="flex flex-wrap lg:flex-nowrap justify-end items-center md:pt-4 sm:pt-4">
          {router.pathname === "/Banks" && (
            <li className="md:mt-3 sm:mt-3 pb-2">
              <input
                type="search"
                className="text-center w-80 h-9 md:w-60 sm:w-60 border border-green rounded"
                placeholder="Nombre de Banco"
                onChange={(e) => onChange(e.target.value)}
              />
            </li>
          )}
          <li className="md:mt-3 sm:mt-3 pl-7 pb-2">
            <Link
              href={router.pathname === "/" ? "/Banks" : "/"}
              className="text-xl text-dark font-medium pr-4 md:text-xl sm:text-xl px-2 border-none hover:text-red hover:bg-transparent"
            >
              {router.pathname === "/" ? "Bancos afiliados" : "Home"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Logo.png";

const Header = ({ onChange }) => {
  const router = useRouter();

  return (
    <header className="Container mx-auto flex items-center p-6 justify-between lg:px-8 bg-white">
      <div className="flex justify-start">
        <Image src={logo} alt="logo" width={300} height={300} />
      </div>
      <nav>
        <ul className="flex flex-wrap justify-end items-center md:pt-4 sm:pt-4">
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
              className="text-xl text-brown font-medium pr-4 md:text-xl sm:text-xl px-2 border-none hover:text-red hover:bg-transparent"
            >
              {router.pathname === "/" ? "Bancos afiliados" : "Home"}
            </Link>
          </li>
          {router.pathname === "/" && (
            <>
              <li className="md:mt-3 sm:mt-3 pb-2">
                <button className="text-green rounded hover:text-white hover:bg-green font-medium pr-4 md:text-xl sm:text-xl px-2">
                  Login
                </button>
                <button className="text-green rounded hover:text-white hover:bg-green font-medium pr-4 md:text-xl sm:text-xl px-2">
                  Sing up
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

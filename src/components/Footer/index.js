import React from "react";
import Image from "next/image";
import LogoF from "../../assets/LogoF.png";

const Footer = () => {
  return (
    <footer className="bg-dark flex justify-center items-center text-green text-lg p-6 mt-auto fixed bottom-0 w-full">
      <Image alt="LogoFooter" src={LogoF} width={250} />
      <div className="pl-20 text-white font-normal text-sm">
        <p>Copyright © 2020 Banqueate.</p>
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

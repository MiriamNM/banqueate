import React from "react";
import "@components/Header/index";
import Header from "@components/Header/index";
// import Link from "next/link";
// import phoneImg from "../../assets/phoneImg.png";
// import Image from "next/image";

const Main = ({ children }) => {
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default Main;
// <div>
//         <Image
//           src={phoneImg}
//           alt="phoneImg"
//           className="w-85 md:w-64 mb-4 md:mb-0 pr-8"
//         />
//       </div>
//       <div className="flex flex-col items-center md:pt-4 sm:pt-4">
//         <h2 className="text-green font-medium text-5xl md:text-4xl sm:text-4xl">
//           Conocenos
//         </h2>
//         <p className="text-dark font-medium text-3xl text-justify md:text-2xl sm:text-2xl md:pb-3 sm:pb-3">
//           Estamos afiliados a <br />
//           grandes bancos y con la <br />
//           app puedes tener todos <br />
//           en uno
//         </p>
//         <Link
//           href="/Banks"
//           className="text-brown  bg-mint font-normal text-base rounded px-4 py-2 mt-4 md:w-40 md:py-3 sm:w-40 sm:py-3 hover:bg-red hover:border-light hover:text-ligth"
//         >
//           Bancos afiliados
//         </Link>
//       </div>

import React from "react";
import Image from "next/image";
import Link from "next/link";
import phoneImg from "@assets/phoneImg.png";

const Dashboard = () => {
  return (
    <main className="bg-light flex flex-wrap items-center justify-center md:p-4 sm:p-3">
      <div>
        <Image src={phoneImg} alt="phoneImg" width={500} height={500} />
      </div>
      <div className="flex flex-col items-center md:pt-4 sm:pt-4">
        <h2 className="text-red font-medium text-5xl md:text-4xl sm:text-4xl">
          Crea tu producto
        </h2>
        <p className="text-dark font-medium text-3xl text-justify md:text-2xl sm:text-2xl md:pb-3 sm:pb-3">
          Registrate y organiza de <br />
          manera profesional <br />
          tu inventario.
        </p>
        <Link
          href="/Banks"
          className="text-red  bg-mint font-normal text-base rounded px-4 py-2 mt-4 md:w-40 md:py-3 sm:w-40 sm:py-3 hover:bg-red hover:border-light hover:text-ligth"
        >
          Registrate y administra tu inventario
        </Link>
      </div>
    </main>
  );
};

export default Dashboard;

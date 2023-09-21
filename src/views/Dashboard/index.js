import React from "react";
import Image from "next/image";
import Link from "next/link";
import phoneImg from "@assets/phoneImg.png";

const Dashboard = () => {
  return (
    <main className="w-full max-h-screen flex flex-wrap items-center">
      <div className="ml-0 lg:ml-0">
        <Image src={phoneImg} alt="phoneImg" width={550} height={550} />
      </div>
      <div className="flex flex-col text-justify md:pt-4 sm:pt-4 lg:px-1 md:px-4 sm:px-4 mx-4">
        <h2 className="text-dark font-medium text-4xl sm:text-5xl md:text-7xl pb-5">
          Todos los bancos,
          <br />
          desde nuestra app.
        </h2>
        <p className="text-dark font-light text-base sm:text-lg md:text-base md:pb-3 sm:pb-3">
          Nuestra red de bancos afiliados crece día a día y pueden estar al
          alcance de tu bolsillo.
          <br />
          Fácil y sin burocracia.
        </p>
        <Link
          href="/Banks"
          className="text-green bg-white font-medium text-base sm:text-lg md:text-base rounded mt-4 md:w-40 md:pb-8 sm:w-40 sm:pb-8 lg:pb-3 hover:text-red"
        >
          〉Ver bancos afilidos
        </Link>
      </div>
    </main>
  );
};

export default Dashboard;

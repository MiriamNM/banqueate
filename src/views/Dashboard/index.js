import React from "react";
import Image from "next/image";
import Link from "next/link";
import phoneImg from "@assets/phoneImg.png";

const Dashboard = () => {
  return (
    <main className="bg-light flex flex-wrap items-center justify-around md:p-4 sm:p-3">
      <div>
        <Image src={phoneImg} alt="phoneImg" width={550} height={550} />
      </div>
      <div className="flex flex-col items-center md:pt-4 sm:pt-4">
        <h2 className="text-green font-medium text-5xl md:text-6xl sm:text-4xl">
          Conocenos
        </h2>
        <p className="text-dark font-normal text-3xl text-justify md:text-3xl sm:text-3xl md:pb-3 sm:pb-3">
          Estamos afiliados a <br />
          muchos bancos y con la <br />
          app puedes tener todos <br />
          en uno.
        </p>
        <Link
          href="/Banks"
          className="text-light bg-brown font-normal text-base rounded px-4 py-2 mt-4 md:w-40 md:py-3 sm:w-40 sm:py-3 hover:bg-red hover:text-light"
        >
          Bancos afiliados
        </Link>
      </div>
    </main>
  );
};

export default Dashboard;

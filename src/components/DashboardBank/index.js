import React from "react";
import Image from "next/image";
import { useBanksContext } from "@hooks/useDataBankContext";

const DashboardBank = () => {
  const { dataBanks } = useBanksContext();

  return (
    <div className="bg-light">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Bancos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {dataBanks.map(({ bankName, description, age, url }) => (
            <div key={bankName} className="group relative">
              <div className="flex justify-center items-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={url}
                  alt={bankName}
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="text-justify">
                  <h3 className="text-sm text-gray-700">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 pb-1"
                    />
                    {bankName}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 pb-1">
                    {description}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {age} años
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardBank;

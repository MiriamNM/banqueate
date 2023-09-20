import React from "react";
import Image from "next/image";

const BankCards = ({ state }) => {
  return (
    <>
      {state.map(({ bankName, description, age, url }) => (
        <div key={bankName} className="group relative">
          <div className="flex justify-center items-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image
              src={url}
              alt={bankName}
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="font-semibold text-lg">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 pb-1 font-semibold"
                />
                {bankName}
              </h3>
              <p className="mt-1 text-sm pb-1">{description}</p>
              <p className="text-sm font-medium text-gray-900">{age} años</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BankCards;

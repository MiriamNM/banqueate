import React from "react";
import Image from "next/image";

const BankCards = ({ state }) => {
  return (
    <>
      {state.map(({ bankName, description, age, url }) => (
        <div
          key={bankName}
          className="group relative bg-silver bg-opacity-5 p-5"
        >
          <div className="flex justify-center items-center aspect-h-1 aspect-w-1 w-full -hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-20">
            <Image
              src={url}
              alt={bankName}
              layout="fixed"
              width={100}
              height={100}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="font-semibold text-lg text-green">{bankName}</h3>
              <p className="mt-1 text-sm font-light text-justify text-silver pb-1">
                {description}
              </p>
              <p className="text-sm font-light text-silver text-gray-900">
                {age} años
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BankCards;

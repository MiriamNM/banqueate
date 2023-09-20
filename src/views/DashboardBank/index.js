import React from "react";
import { useBanksContext } from "@hooks/useDataBankContext";
import BankCards from "@components/BankCards";

const DashboardBank = () => {
  const {
    state: { dataBanks, dataBankFilter },
  } = useBanksContext();

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl font-semibold tracking-tight text-dark">
          Bancos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {dataBankFilter.length <= 0 ? (
            <BankCards state={dataBanks} />
          ) : (
            <BankCards state={dataBankFilter} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardBank;

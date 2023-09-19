import React from "react";
import DashboardBankContainer from "@components/DashboardBank/container";
import { BanksProvider } from "@hooks/useDataBankContext";

export default function Banks() {
  return (
    <div className="bg-light">
      <BanksProvider>
        <DashboardBankContainer />
      </BanksProvider>
    </div>
  );
}

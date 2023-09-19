import React from "react";
import { BanksProvider } from "@hooks/useDataBankContext";
import Dashboard from "@components/Dashboard";

export default function Home() {
  return (
    <div className="bg-light">
      <BanksProvider>
        <Dashboard />
      </BanksProvider>
    </div>
  );
}

import React from "react";
import { BanksProvider } from "@hooks/useDataBankContext";
import Dashboard from "@components/Dashboard";

export default function Home() {
  return (
    <div>
      <BanksProvider>
        <Dashboard />
      </BanksProvider>
    </div>
  );
}

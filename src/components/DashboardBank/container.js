import React, { useEffect } from "react";
import { useBanksContext } from "@hooks/useDataBankContext";
import { GetAllDataBank } from "@services/api";
import DashboardBank from ".";

const DashboardBankContainer = () => {
  const { setDataBanks } = useBanksContext();

  useEffect(() => {
    GetAllDataBank()
      .then((result) => {
        setDataBanks(result);
      })
      .catch((error) => {
        throw error;
      });
  }, [setDataBanks]);

  return <DashboardBank />;
};

export default DashboardBankContainer;

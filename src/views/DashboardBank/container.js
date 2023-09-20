import React, { useEffect } from "react";
import { useBanksContext } from "@hooks/useDataBankContext";
import { GetAllDataBank } from "@services/api";
import DashboardBank from "views/DashboardBank/index";

const DashboardBankContainer = () => {
  const { setState } = useBanksContext();

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllDataBank();
      setState((prevState) => ({ ...prevState, dataBanks: result }));
    };
    fetchData();
  }, [setState]);

  return <DashboardBank />;
};

export default DashboardBankContainer;

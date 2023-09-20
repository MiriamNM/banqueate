import React, { createContext, useContext, useState } from "react";

const BanksContext = createContext();

export const useBanksContext = () => {
  return useContext(BanksContext);
};

export const BanksProvider = ({ children }) => {
  const [state, setState] = useState({
    dataBanks: [],
    currentValue: "",
    dataBankFilter: [],
  });

  return (
    <BanksContext.Provider value={{ state, setState }}>
      {children}
    </BanksContext.Provider>
  );
};

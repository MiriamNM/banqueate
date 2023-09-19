import { createContext, useContext, useState } from "react";

const BanksContext = createContext();

export const useBanksContext = () => {
  return useContext(BanksContext);
};

export const BanksProvider = ({ children }) => {
  const [dataBanks, setDataBanks] = useState([]);

  return (
    <BanksContext.Provider value={{ dataBanks, setDataBanks }}>
      {children}
    </BanksContext.Provider>
  );
};

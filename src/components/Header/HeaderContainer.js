import React from "react";
import Header from "@components/Header/index";
import { useBanksContext } from "@hooks/useDataBankContext";

const HeaderContainer = () => {
  const {
    state: { dataBanks, currentValue },
    setState,
  } = useBanksContext();

  const onChange = (e) => {
    setState((prevState) => ({ ...prevState, currentValue: e }));
    const filterWithSearch = dataBanks.filter(
      ({ bankName }) => bankName === currentValue,
    );
    setState((prevState) => ({
      ...prevState,
      dataBankFilter: filterWithSearch,
    }));
  };

  return <Header onChange={onChange} />;
};

export default HeaderContainer;

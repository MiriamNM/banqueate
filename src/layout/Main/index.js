import React from "react";
import "@components/Header/index";
import Header from "@components/Header/index";

const Main = ({ children }) => {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default Main;

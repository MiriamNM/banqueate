import React from "react";
import "@components/Header/index";
import Header from "@components/Header/HeaderContainer";

const Main = ({ children }) => {
  return (
    <div className="min-h-screen bg-white border-t border-light w-full">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto w-full sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Main;

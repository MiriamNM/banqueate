import React from "react";
import "@components/Header/index";
import Header from "@components/Header/HeaderContainer";
import Footer from "@components/Footer";

const Main = ({ children }) => {
  return (
    <div className="min-h-screen bg-white border-t border-silver">
      <Header />
      <main>
        <div className="pt-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;

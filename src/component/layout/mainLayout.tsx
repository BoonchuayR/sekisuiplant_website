import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = { children: React.ReactNode };

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

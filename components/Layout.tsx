import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="container mx-auto overflow-hidden">
      <Header />
      {children}
    </div>
  );
};

export default Layout;

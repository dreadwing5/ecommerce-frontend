import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

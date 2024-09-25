import React from "react";
import { Outlet } from "react-router-dom";
import LabelBottomNavigation from "./component/Footer";
import ResponsiveAppBar from "./component/Navbar";

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
      <LabelBottomNavigation />
    </div>
  );
};

export default Layout;
import React from "react";
import { Outlet } from "react-router-dom";

const userProtected: React.FC = () => {
  // user context lá

  if (!user) {
    throw new Error("User must be logged To access this page!");
  }
  return user ? <Outlet /> : <...rest>
};

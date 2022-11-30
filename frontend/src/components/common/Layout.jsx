import React from "react";
import { Outlet } from "react-router-dom";


import { FiSettings } from "react-icons/fi";
import { Tooltip } from "@chakra-ui/react";

import { useStateContext } from "../../contexts/ContextProvider";
import { Navbar, Sidebar } from "../../components/Ui";

export const UserLayout = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-6 bottom-4" style={{ zIndex: "1000" }}>
          <Tooltip label="Paramètres">
            <button type="button">
              <FiSettings className="text-2xl" />
            </button>
          </Tooltip>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-main-blue">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg bg-blue-400 border">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};



export const LoginLayout = () => {
  return (
    <div>
        <div>
        </div>
      <Outlet />
    </div>
  );
};












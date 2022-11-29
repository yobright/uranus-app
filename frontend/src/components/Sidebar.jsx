import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MdOutlineCancel,
  MdOutlineDashboard,
  MdOutlineSettings,
  MdOutlineSupervisedUserCircle,
  MdMoney,
  MdOutlineBuildCircle,
  MdOutlineReport,
} from "react-icons/md";
import { GiDamagedHouse } from "react-icons/gi";
import { FiSettings, FiGrid } from "react-icons/fi";


import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useStateContext } from "../contexts/ContextProvider";

const links = [
  {
    name: "dashboard",
    icon: <MdOutlineDashboard className="text-2xl" />,
  },
  {
    name: "production",
    icon: <MdOutlineBuildCircle className="text-2xl" />,
  },
  {
    name: "encaissement",
    icon: <MdMoney className="text-2xl" />,
  },
  {
    name: "clientele",
    icon: <MdOutlineSupervisedUserCircle className="text-2xl" />,
  },
  {
    name: "sinistre",
    icon: <GiDamagedHouse className="text-2xl" />,
  },
  {
    name: "reporting",
    icon: <MdOutlineReport className="text-2xl" />,
  },
  {
    name: "parametre",
    icon: <FiSettings className="text-2xl" />,
  },
];

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  
  const activeLink = "font-semibold flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-active-button text-lg m-2 bg-main-blue-button";

  const normalLink = 'font-meidum flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-lg text-white dark:text-gray-200 hover:bg-main-blue-button m-2'

  const handleOpen = () => {};

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hver:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className="items-center ml-3 mt-4 flex text-xl font-extrabold text-white"
            >
              <p>Uranus App</p>
            </Link>
            <Tooltip title="Fermer">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="mt-4 mr-2"
              >
                <IconButton>
                  <FiGrid className="text-white text-2xl"/>
                </IconButton>
              </button>
            </Tooltip>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to={`/${item.name}`}
                  key={item.name}
                  onClick={() => {}}
                >
                  {item.icon}
                  <span className="capitalize">{item.name}</span>
                </NavLink>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

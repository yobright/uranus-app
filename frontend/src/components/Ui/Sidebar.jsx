import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdMoney,
  MdOutlineReport
} from "react-icons/md";
import { GiDamagedHouse } from "react-icons/gi";
import { FiGrid, FiTool, FiX } from "react-icons/fi";
import { AiOutlineTeam, AiOutlineSetting } from "react-icons/ai";


import { Tooltip } from "@chakra-ui/react";


import { useStateContext } from "../../contexts/ContextProvider";

const links = [
  {
    name: "dashboard",
    icon: <MdOutlineDashboard className="text-2xl" />,
  },
  {
    name: "production",
    icon: <FiTool className="text-2xl" />,
  },
  {
    name: "encaissement",
    icon: <MdMoney className="text-2xl" />,
  },
  {
    name: "clientele",
    icon: <AiOutlineTeam className="text-2xl" />,
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
    icon: <AiOutlineSetting className="text-2xl" />,
  },
];

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  
  const activeLink = "display='flex' font-semibold flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-active-button text-base m-2 bg-main-blue-button";

  const normalLink = 'font-normal flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-base text-white dark:text-gray-200 hover:bg-main-blue-button m-2'

  const handleOpen = () => {};

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hver:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center font-semibold">
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className="items-center ml-3 mt-4 flex pl-4 pt-3 pb-2.5 rounded-lg text-active-button text-base m-2 bg-main-blue-button font-semibold"
            >
              <p>Uranus App</p>
            </Link>
            <Tooltip label="Fermer">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="mt-4 mr-2"
              >
                  <FiX className="text-white text-2xl" />
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



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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const links = [
  {
    name: "dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "production",
    icon: <MdOutlineBuildCircle />,
  },
  {
    name: "encaissement",
    icon: <MdMoney />,
  },
  {
    name: "clientele",
    icon: <MdOutlineSupervisedUserCircle />,
  },
  {
    name: "sinistre",
    icon: <GiDamagedHouse />,
  },
  {
    name: "reporting",
    icon: <MdOutlineReport />,
  },
  {
    name: "parametre",
    icon: <MdOutlineSettings />,
  },
];

const Sidebar = () => {
  const activeMenu = true;
  
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2'

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dar;text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleOpen = () => {};

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hver:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center ml-3 mt-4 flex text-xl font-extrabold dark:text-white text-slate-900"
            >
              <p>Uranus App</p>
            </Link>
            <Tooltip title="Fermer">
              <button type="button" onClick={handleOpen} className="mt-4 mr-2">
                <IconButton>
                  <MdOutlineCancel />
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
                  <span className="capitalize">
                    {item.name}
                  </span>
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

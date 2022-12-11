import React, { useEffect } from 'react'

import { MdOutlineMenu, MdKeyboardArrowDown } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from 'react-icons/ri'
import { FiChevronsRight } from "react-icons/fi";


import { Tooltip, Avatar } from "@chakra-ui/react";
import { useStateContext } from '../../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-2xl rounded-full p-3 hover:bg-main-blue-button right-2 top-3"
    >
      {icon}
    </button>
  </Tooltip>
);


const Navbar = () => {

  const {activeMenu, setActiveMenu} = useStateContext()

  return (
    <div className="flex relative justify-between p-2 md:mx-6">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="white"
        icon={<FiChevronsRight className="" />}
      />
    </div>
  );
}

export default Navbar
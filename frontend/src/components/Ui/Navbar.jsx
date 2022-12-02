import React, { useEffect } from 'react'

import { MdOutlineMenu, MdKeyboardArrowDown } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from 'react-icons/ri'
import { FiGrid } from "react-icons/fi";


import { Tooltip, Avatar } from "@chakra-ui/react";
import { useStateContext } from '../../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray right-2 top-3"
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
        color="blue"
        icon={<FiGrid className="" />}
      />
    </div>
  );
}

export default Navbar
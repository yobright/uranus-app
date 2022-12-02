import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io";
import NavItem from "./NavItem";

const SidebarTest = () => {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="0"
      h="100vh"
      borderRight="2px"
      borderColor="gray.200"
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      bg="blue.700"
    >
      <Flex
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
      </Flex>

      <Flex
        paddingLeft="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="p" size={4}>
              Arnaud O
            </Heading>
            <Text>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SidebarTest;

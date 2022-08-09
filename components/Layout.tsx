import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./NavBar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <Box bg={"gray.100"} minH="100vh">
    <Navbar/>
    <Box
      maxW={"700px"}
      w="100%"
      alignItems="center"
      justifyContent="center"
      mx="auto"
    >
      {children}
    </Box>
  </Box>
);

export default Layout;

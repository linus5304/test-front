import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  VStack,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { FaKeycdn } from "react-icons/fa";
import { useRouter } from "next/router";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [display, changeDisplay] = useState("none");
  //   const { data } = useMeQuery();
  //   const [logout] = useLogoutMutation();
  //   const apolloClient = useApolloClient();
  //   const router = useRouter();
  //   const { data: jsData } = useGetJsProfileQuery();

  //   const logoutFn = async () => {
  //     await logout();
  //     apolloClient.resetStore();
  //   };

  return (
    <Flex top={0} zIndex={40} px={8} py={4} position="sticky" bg="white" mb={4}>
      <Flex justifyContent="space-between" w="100%">
        <Flex>
          <NextLink href="/" passHref>
            <Flex alignItems="center" cursor="pointer">
              <Icon as={FaKeycdn} fontSize="4xl" color="#00b074" />
              <Text fontSize="xl" fontWeight="bold">
                goJobs
              </Text>
            </Flex>
          </NextLink>
        </Flex>

        <Flex
          justifyContent="space-between"
          display={["none", "none", "none", "flex", "flex"]}
          gap="4"
        >
          <NextLink href="/jobs">
            <Button variant="ghost" onClick={() => changeDisplay("none")}>
              Jobs
            </Button>
          </NextLink>
          <NextLink href="/post-job">
            <Button variant="ghost">Post Job</Button>
          </NextLink>
          <NextLink href="/login">
            <Button variant="ghost" onClick={() => changeDisplay("none")}>
              Login
            </Button>
          </NextLink>
          <NextLink href="/register">
            <Button onClick={() => changeDisplay("none")}>Register</Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

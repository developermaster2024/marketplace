import React from "react";
import { Box, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillHome, AiFillSetting, AiFillAlert } from "react-icons/ai";

const SidebarContent = () => {
  return (
    <Box p={2} bg="black" borderRight="1px" borderRightColor="gray.700">
      <Text fontSize="xl" fontWeight="bold" mb={4} color="gray">
        Logo
      </Text>
      <Flex flexDirection="column">
        <Link href="/dashboard/overview">
          <Button variant="ghost" my={2} color="gray">
            <AiFillHome size={24} />
          </Button>
        </Link>
        <Box height="1rem"></Box>
        <Link href="/dashboard/users">
          <Button variant="ghost" my={2} color="gray">
            <AiFillAlert size={24} />
          </Button>
        </Link>
        <Box height="1rem"></Box>
        <Link href="/dashboard/settings">
          <Button variant="ghost" my={2} color="gray">
            <AiFillSetting size={24} />
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

const dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Flex minH="100vh" bg="white">
      <SidebarContent />
      <Box flex={1} p={4}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            {router.pathname.split("/")[2]}
          </Text>
          <Button onClick={isOpen ? onClose : onOpen}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </Flex>

        <Box>
          {router.pathname === "/dashboard/overview" && (
            <Text>Overview page</Text>
          )}
          {router.pathname === "/dashboard/users" && <Text>Users page</Text>}
          {router.pathname === "/dashboard/settings" && (
            <Text>Settings page</Text>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default dashboard;

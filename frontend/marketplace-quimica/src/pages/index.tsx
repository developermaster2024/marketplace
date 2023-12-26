import React, { useState } from "react";
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { LiaIndustrySolid } from "react-icons/lia";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter(); // Inicializa useRouter

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const redirectToUserPage = () => {
    router.push("/UsersModule/UserProcess/UsersRegister/userscreate"); // Redirige a la página de usuario al hacer clic en Usuario
  };

  const redirectToCompanyPage = () => {
    router.push("/UsersModule/UserProcess/CompanyRegister/companyregister"); // Redirige a la página de compañía al hacer clic en Compañía
  };

  return (
    <Flex justifyContent="center">
      <Button colorScheme="blue" mr="4">
        Login
      </Button>
      <Button colorScheme="blue" onClick={openModal}>
        Register
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex align="center" justify="center">
              <Box onClick={redirectToUserPage} style={{ cursor: "pointer" }}>
                <CiUser size={100} />
                <h1 className="cursor-pointer">Usuario</h1>
              </Box>
              <Box
                ml={8}
                onClick={redirectToCompanyPage}
                style={{ cursor: "pointer" }}
              >
                <LiaIndustrySolid size={100} />
                <h1 className="cursor-pointer">Compañia</h1>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Index;

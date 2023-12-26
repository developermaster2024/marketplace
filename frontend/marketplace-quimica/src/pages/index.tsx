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

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
              <Box>
                <CiUser size={100} />
                <h1>Usuario</h1>
              </Box>
              <Box ml={8}>
                <LiaIndustrySolid size={100} />
                <h1>Compañia</h1>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Index;

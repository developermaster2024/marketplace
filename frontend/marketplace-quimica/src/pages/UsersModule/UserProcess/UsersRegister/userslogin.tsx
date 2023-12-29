import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const userslogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const router = useRouter();
  const redirectToUserPage = () => {
    router.push("/UsersModule/UserProcess/UsersRegister/userscreate");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@admin.com" && password === "123456") {
      toast({
        title: "Login successful",
        description: "Welcome back!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/UsersModule/UserProcess/UsersRegister/dashboard");
    } else {
      toast({
        title: "Error",
        description: "Invalid email or password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="white" p={8} borderRadius="md" boxShadow="md" maxW="sm" mx="auto">
      <form onSubmit={handleLogin}>
        <FormControl mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" type="submit" w="full">
          Login
        </Button>
      </form>
      <h1
        className=" text-blue-500 cursor-pointer"
        onClick={redirectToUserPage}
      >
        No tienes cuenta? Registrarse
      </h1>
    </Box>
  );
};

export default userslogin;

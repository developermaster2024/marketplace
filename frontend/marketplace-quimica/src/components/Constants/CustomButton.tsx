import { Button } from "@chakra-ui/react";
import React from "react";

type CustomButtonProps = {
  title: string;
  onClick?: () => void;
};

const CustomButton = ({ title, onClick }: CustomButtonProps) => {
  return (
    <div>
      <Button colorScheme="blue" onClick={onClick}>
        {title}
      </Button>
    </div>
  );
};

export default CustomButton;

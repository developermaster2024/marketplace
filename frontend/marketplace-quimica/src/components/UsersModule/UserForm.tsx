import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
} from "@chakra-ui/react";
const UserForm = () => {
  return (
    <div>
      <Box bg="white" p={4} borderRadius="md" shadow="md">
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                First name
              </FormLabel>
              <Input placeholder="First name" size="sm" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                Last name
              </FormLabel>
              <Input placeholder="Last name" size="sm" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                Email
              </FormLabel>
              <Input placeholder="Email" size="sm" type="email" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                Phone number
              </FormLabel>
              <Input placeholder="Phone number" size="sm" type="tel" />
            </FormControl>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default UserForm;

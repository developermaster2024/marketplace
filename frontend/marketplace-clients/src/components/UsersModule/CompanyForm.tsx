import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Select,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "../Constants/CustomButton";
import { useRouter } from "next/router";

const CompanyForm = () => {
  const router = useRouter();
  const redirectToUserPage = () => {
    router.push("/");
  };
  const redirectToUserPage2 = () => {
    router.push("/");
  };
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
                Street
              </FormLabel>
              <Input placeholder="Street" size="sm" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                Street 2
              </FormLabel>
              <Input placeholder="Street 2" size="sm" type="email" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                City
              </FormLabel>
              <Input placeholder="City" size="sm" type="tel" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="bold">
                    Select 1
                  </FormLabel>
                  <Select placeholder="Select 1" size="sm">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="bold">
                    Select 2
                  </FormLabel>
                  <Select placeholder="Select 2" size="sm">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </Select>
                </FormControl>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={2}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="bold">
                    Select 1
                  </FormLabel>
                  <Select placeholder="Select 1" size="sm">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="bold">
                    Select 2
                  </FormLabel>
                  <Select placeholder="Select 2" size="sm">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </Select>
                </FormControl>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
        <div className="flex justify-end space-x-5 mt-10">
          <CustomButton title={"GUARDAR"} onClick={redirectToUserPage} />
          <CustomButton title={"VOLVER"} onClick={redirectToUserPage2} />
        </div>
      </Box>
    </div>
  );
};

export default CompanyForm;

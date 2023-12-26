import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Select,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
const Users_Card_Selector = () => {
  return (
    <>
      <FormControl>
        <FormLabel>ClientID</FormLabel>
        <Input type="text" />
      </FormControl>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Topic</Th>
              <Th>Action</Th>
              <Th>Permission</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td p={0}>
                <Input size={"sm"} />
              </Td>
              <Td p={0}>
                <Select size={"sm"}>
                  <option value="option1">Publish</option>
                  <option value="option2">Suscribe</option>
                  <option value="option3">Publish y Suscribe</option>
                </Select>
              </Td>
              <Td p={0}>
                <Select size={"sm"}>
                  <option value="option1">Allow</option>
                  <option value="option2">Deny</option>
                </Select>
              </Td>
              <Td>
                <BsTrash size={30} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users_Card_Selector;

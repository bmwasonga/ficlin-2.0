import { useQuery } from '@apollo/client';
import {
  Box,
  Button,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';

import { VIEW_TRIPS } from '@/utils/api';

const ToursCard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, data } = useQuery(VIEW_TRIPS);

  if (loading && !data) return <Spinner />;
  if (error) return <p>Error...</p>;
  // console.log('the data is', data);
  const { tours_published } = data;

  return (
    <div>
      <Heading as="h1">Our current users </Heading>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th> User ID</Th>
            <Th>Company Name</Th>
            <Th>destination </Th>
            <Th>Active? </Th>
            <Th>more... </Th>
          </Tr>
        </Thead>
        <Tbody>
          {tours_published &&
            tours_published.map((tour, idx) => {
              return (
                <>
                  <Tr key={tour.id}>
                    <Td isNumeric>{idx + 1}</Td>
                    <Td>{tour.travel_company.company_name}</Td>
                    <Td>{tour.tour_destination}</Td>
                    <Td>
                      <Link>This is a ink</Link>
                    </Td>
                    {/* <Button onClick={onOpen}>More</Button> */}
                  </Tr>
                </>
              );
            })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Number of Tours: {tours_published.length} </Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
};

export default ToursCard;

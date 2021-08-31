import { useQuery } from '@apollo/client';
import { Button, chakra, Flex, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import React from 'react';

import { VIEW_USERS } from '@/utils/api';

const UsersCard: React.FC = () => {
  const { loading, error, data } = useQuery(VIEW_USERS);

  console.log('The users are: ', data);

  if (loading && !data) return <Spinner />;
  if (error) return <p>Error...</p>;

  const { users } = data;

  return (
    <Flex w="full" bg="gray.600" p={50} alignItems="center" justifyContent="center">
      <Stack direction={{ base: 'column' }} w="full" bg={{ md: 'white' }} shadow="lg">
        {users.map((person, pid) => {
          return (
            <Flex direction={{ base: 'row', md: 'column' }} bg={'white'} key={pid}>
              <SimpleGrid
                justifyContent="space-between"
                spacingY={3}
                columns={{ base: 1, md: 3 }}
                rows={{ base: 3, md: 1 }}
                w={{ base: 120, md: 'full' }}
                textTransform="uppercase"
                bg={'gray.100'}
                color={'gray.500'}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                display="table-header-group">
                <chakra.span>Name</chakra.span>
                <chakra.span>Email</chakra.span>
                <chakra.span textAlign={{ md: 'right' }}>Actions</chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 3 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline">
                <span>{person.display_name}</span>
                <chakra.span textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                  {person.account.email}
                </chakra.span>
                <Flex justify={{ md: 'end' }}>
                  <Button variant="solid" colorScheme="red" size="sm">
                    Delete
                  </Button>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default UsersCard;

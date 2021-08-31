import {
  Box,
  chakra,
  Flex,
  GridItem,
  SimpleGrid,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

import Feature from './Feature';
import { data } from './FeatureData';
const FeatureCard: React.FC = () => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center">
      <Box shadow="xl" bg={useColorModeValue('white', 'gray.800')} px={8} py={20} mx="auto">
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}>
          <Box alignSelf="start">
            <chakra.h2
              color={'brand.500'}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide">
              Everything you need
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="extrabold"
              textAlign={{ base: 'center', sm: 'left' }}
              color={'black'}
              lineHeight="shorter"
              letterSpacing="tight">
              All-in-one platform
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: 'lg', md: 'xl' }}
              textAlign={{ base: 'center', sm: 'left' }}
              color={'gray.600'}>
              Take a pick from our wide selection of trips, pay, and enjoy the be best travelling
              exerience with us.
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: 'grid' }}
              gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}>
              {data.map((rdata, idx) => {
                const { title, description } = rdata;
                return <Feature key={idx} title={title} description={description} />;
              })}
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default FeatureCard;

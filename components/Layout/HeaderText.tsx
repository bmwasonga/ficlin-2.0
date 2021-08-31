import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FC } from 'react';

interface HeaderText {
  heading: string;
  subheading: string;
}

const HeaderText: FC<HeaderText> = ({ heading, subheading }) => {
  return (
    <Box w="100%" m="auto" position="absolute" top="40" textAlign="center">
      <Heading as="h3" size="lg" color="white">
        {heading}
      </Heading>
      <Text fontSize="xl" color="white">
        {subheading}
      </Text>
    </Box>
  );
};

export default HeaderText;

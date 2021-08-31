import { Box, chakra, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
interface Props {
  title: string;
  description: string;
}

const Feature: React.FC<Props> = ({ title, description }) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Icon boxSize={5} mt={1} mr={2} color={'brand.500'} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"></path>
        </Icon>
      </Flex>
      <Box ml={4}>
        <chakra.dt fontSize="lg" fontWeight="bold" lineHeight="6" color={'gray.900'}>
          {title}
        </chakra.dt>
        <chakra.dd mt={2} color={'gray.500'}>
          {description}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

export default Feature;

import { Box, Button, Center } from '@chakra-ui/react';
import React from 'react';

import CModal from '../Modals/CModal';

const Search: React.FC = () => {
  return (
    <Box
      w={['98%', '90%', '50%']}
      m="auto"
      bg="white"
      boxShadow="md"
      borderRadius="md"
      pos="relative"
      top="-5">
      <Center>
        <Button m="16px" colorScheme="blue">
          Search
        </Button>
        <CModal />
      </Center>
    </Box>
  );
};

export default Search;

//include the search options for the trips below. refactor the modal from here

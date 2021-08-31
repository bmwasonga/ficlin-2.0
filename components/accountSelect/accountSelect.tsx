import { Flex, Spacer } from '@chakra-ui/react';
import React, { FC } from 'react';

import CreatorModal from './Creatormodal';
import TravellerModal from './TravelerModal';

const AccountSelect: FC = () => {
  return (
    <>
      <Flex>
        <CreatorModal />
        <Spacer />
        <TravellerModal />
      </Flex>
    </>
  );
};

export default AccountSelect;

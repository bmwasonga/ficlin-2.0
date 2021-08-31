import { Box, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

import AccountSelect from '@/components/accountSelect/accountSelect';
import MainLayout from '@/components/Layouts/MainLayout';
import PrivateRoute from '@/components/PrivateRoute';

const Profile: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '40%']} m="auto">
        <Heading as="h1" textAlign="center">
          welcome user
        </Heading>
        <Text fontSize={['4xl', '2xl']}>How would you like to proceed?</Text>
        <AccountSelect />
      </Box>
    </MainLayout>
  );
};

export default PrivateRoute(Profile);

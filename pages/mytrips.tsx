import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import MainLayout from '@/components/Layouts/MainLayout';
import PrivateRoute from '@/components/PrivateRoute';

const Profile: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '50%']} m="auto">
        <h1> I am logged in and these are my trips</h1>
        <h2>
          The idea to have more of those completed and those that I have favourited and those that i
          have reserveed
        </h2>
      </Box>
    </MainLayout>
  );
};

export default PrivateRoute(Profile);

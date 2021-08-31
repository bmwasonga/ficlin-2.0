import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import ProfileCard from '@/components/Cards/Profile';
import MainLayout from '@/components/Layouts/MainLayout';
import PrivateRoute from '@/components/PrivateRoute';

const Profile: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '80%']} m="auto">
        <ProfileCard />
      </Box>
    </MainLayout>
  );
};

export default PrivateRoute(Profile);

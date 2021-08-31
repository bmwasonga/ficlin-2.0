import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import MainLayout from '@/components/Layouts/MainLayout';
import LoggedinChange from '@/components/PasswordChange/LoggedinChange';
import PrivateRoute from '@/components/PrivateRoute';

const LoggedInPasswordChange: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '50%']} m="auto">
        <LoggedinChange />
      </Box>
    </MainLayout>
  );
};

export default LoggedInPasswordChange;

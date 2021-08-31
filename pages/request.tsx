import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import MainLayout from '@/components/Layouts/MainLayout';
import Request from '@/components/PasswordChange/Request';

const RequestPage: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '50%']} m="auto">
        <Request />
      </Box>
    </MainLayout>
  );
};

export default RequestPage;

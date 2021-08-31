import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import MainLayout from '@/components/Layouts/MainLayout';
import Change from '@/components/PasswordChange/Change';

const SignUpPage: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '50%']} m="auto">
        <Change />
      </Box>
    </MainLayout>
  );
};

export default SignUpPage;

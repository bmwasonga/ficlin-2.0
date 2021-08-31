import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import MainLayout from '@/components/Layouts/MainLayout';
import SignUpForm from '@/forms/SignUpForm';

const SignUpPage: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '40%']} m="auto">
        <SignUpForm />
      </Box>
    </MainLayout>
  );
};

export default SignUpPage;

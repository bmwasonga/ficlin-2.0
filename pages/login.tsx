import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import MainLayout from '@/components/Layouts/MainLayout';
import SignInForm from '@/forms/SignInForm';

const SignUpPage: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '40%']} m="auto">
        <SignInForm />
      </Box>
    </MainLayout>
  );
};

export default SignUpPage;

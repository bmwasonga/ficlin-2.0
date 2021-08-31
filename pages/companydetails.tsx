import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import MainLayout from '@/components/Layouts/MainLayout';
import PrivateRoute from '@/components/PrivateRoute';
import CaptureCompany from '@/forms/CaptureCompany';

const CompanyDetailsPage: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '50%']} m="auto">
        <Heading as="h3" size="2xl">
          Provide details for your company.
        </Heading>
        <CaptureCompany />
      </Box>
    </MainLayout>
  );
};

export default PrivateRoute(CompanyDetailsPage);

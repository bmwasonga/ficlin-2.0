import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import FileUpload from '@/components/ImageInput/ImageInput';
import MainLayout from '@/components/Layouts/MainLayout';
import PrivateRoute from '@/components/PrivateRoute';
import CreateTour from '@/forms/CreateForm';

const Create: FC = () => {
  return (
    <MainLayout>
      <Box w={['98%', '90%', '30%']} m="auto">
        <h1>This is where we shall capture the details for the company</h1>
      </Box>
    </MainLayout>
  );
};

// export default FiclinAdmin;
export default PrivateRoute(Create);

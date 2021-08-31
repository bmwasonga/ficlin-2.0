import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import AdminLayout from '@/components/Layouts/AdminLayout';
import AdminRoute from '@/components/PrivateRoute/AdminRoute';

const Calendar: FC = () => {
  return (
    <AdminLayout>
      Imagine being able to sort the trips, knowing what trip is for what month
    </AdminLayout>
  );
};

export default AdminRoute(Calendar);

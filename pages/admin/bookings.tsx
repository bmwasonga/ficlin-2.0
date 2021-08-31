import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import AdminLayout from '@/components/Layouts/AdminLayout';
import AdminRoute from '@/components/PrivateRoute/AdminRoute';

const Bookings: FC = () => {
  return <AdminLayout>Here we display the bookings;</AdminLayout>;
};

export default AdminRoute(Bookings);

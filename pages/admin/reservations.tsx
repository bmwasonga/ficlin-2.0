import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import AdminLayout from '@/components/Layouts/AdminLayout';
import AdminRoute from '@/components/PrivateRoute/AdminRoute';

const Reservations: FC = () => {
  return <AdminLayout> Monitor the reservations </AdminLayout>;
};

export default AdminRoute(Reservations);

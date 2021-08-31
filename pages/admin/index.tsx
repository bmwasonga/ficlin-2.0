import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import AdminLayout from '@/components/Layouts/AdminLayout';
import AdminRoute from '@/components/PrivateRoute/AdminRoute';

const Admin: FC = () => {
  return <AdminLayout>Admin Dashboard;</AdminLayout>;
};

export default AdminRoute(Admin);

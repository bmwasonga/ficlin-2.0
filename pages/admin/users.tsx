import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import UsersCard from '@/components/Cards/UsersCard';
import AdminLayout from '@/components/Layouts/AdminLayout';
import AdminRoute from '@/components/PrivateRoute/AdminRoute';

const Users: FC = () => {
  return (
    <AdminLayout>
      <UsersCard />
    </AdminLayout>
  );
};

export default AdminRoute(Users);

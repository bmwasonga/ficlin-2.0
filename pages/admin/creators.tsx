import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import AdminLayout from '@/components/Layouts/AdminLayout';
import AdminRoute from '@/components/PrivateRoute/AdminRoute';

const Creators: FC = () => {
  return <AdminLayout>we can see the creators and the companies they manage</AdminLayout>;
};

export default AdminRoute(Creators);

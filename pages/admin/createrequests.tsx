import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import AdminLayout from '@/components/Layouts/AdminLayout';
import AdminRoute from '@/components/PrivateRoute/AdminRoute';

const CreatorRequest: FC = () => {
  return <AdminLayout>Approve requests for creators;</AdminLayout>;
};

export default AdminRoute(CreatorRequest);

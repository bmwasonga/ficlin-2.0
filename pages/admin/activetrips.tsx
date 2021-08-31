import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import ToursCard from '@/components/Cards/ToursCard';
import AdminLayout from '@/components/Layouts/AdminLayout';
import AdminRoute from '@/components/PrivateRoute/AdminRoute';

const ActiveTrips: FC = () => {
  return (
    <AdminLayout>
      <ToursCard />
    </AdminLayout>
  );
};

export default AdminRoute(ActiveTrips);

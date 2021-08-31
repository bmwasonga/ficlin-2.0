import React, { ReactNode } from 'react';

import SideBar from '@/components/Navigation/Sidebar';

interface Props {
  children: ReactNode;
}
const AdminLayout: React.FC = ({ children }: Props) => {
  return (
    <>
      <SideBar>{children}</SideBar>
    </>
  );
};

export default AdminLayout;

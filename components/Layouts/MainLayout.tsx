import React, { ReactNode } from 'react';

import Header from '@/components/Navigation';

interface Props {
  children: ReactNode;
}
const MainLayout: React.FC = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;

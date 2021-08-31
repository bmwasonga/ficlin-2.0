import React from 'react';

import FeaturesCard from '@/components/Cards/Features/Featurescard';
import Footer from '@/components/Cards/FooterCard';
import HeaderText from '@/components/Layout/HeaderText';
import ImageHeader from '@/components/Layout/ImageHeader';
import MainLayout from '@/components/Layouts/MainLayout';
import Search from '@/components/Search/index';

const App: React.FC = () => (
  <MainLayout>
    <ImageHeader />
    <Search />
    <HeaderText heading={'Travel Kenya with us'} subheading={'We guarantee the best experience'} />
    <FeaturesCard />
    <Footer />
  </MainLayout>
);

export default App;

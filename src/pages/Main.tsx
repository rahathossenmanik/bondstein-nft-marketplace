import React from 'react';
import TopNavbar from '../components/TopNavbar';
import HeroSection from '../components/HeroSection';
import FeaturePros from '../components/FeaturePros';
import Footer from '../components/Footer';
import TopNFTSection from '../components/TopNFTSection';
import Collection from '../components/Collection';

const Main = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <FeaturePros />
      <TopNFTSection />
      <Collection />
      <Footer />
    </>
  );
};

export default Main;

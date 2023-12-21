import React from 'react';
import TopNavbar from '../components/TopNavbar';
import HeroSection from '../components/HeroSection';
import FeaturePros from '../components/FeaturePros';
import Footer from '../components/Footer';
import TopNFTSection from '../components/TopNFTSection';
import Collection from '../components/Collection';
import SignupSection from '../components/SignupSection';

const Main = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <FeaturePros />
      <TopNFTSection />
      <Collection />
      <SignupSection />
      <Footer />
    </>
  );
};

export default Main;

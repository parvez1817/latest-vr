import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DiscoverSection from '@/components/DiscoverSection';
import DualPurposeSection from '@/components/DualPurposeSection';
import InteractiveMapSection from '@/components/InteractiveMapSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DiscoverSection />
        <DualPurposeSection />
        <InteractiveMapSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

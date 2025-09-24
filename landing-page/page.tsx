'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Security from './components/Security';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden pt-16 md:pt-20">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
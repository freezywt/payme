import React from 'react';
import Hero from './components/Hero';
import BestServices from './components/BestServices';
import OurFeatures from './components/OurFeatures';
import Pricing from './components/Pricing';
import Sponsorship from './components/Sponsorship';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';

function Home() {
  return (
    <section>
      <Hero />
      <Sponsorship />
      <BestServices />
      <OurFeatures />
      <Testimonials />
      <Pricing />
      <Faq />
    </section>
  );
}

export default Home;

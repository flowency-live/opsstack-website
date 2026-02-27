'use client';

import ValuesCarousel from './ValuesCarousel';

const slides = [
  {
    leadIn: 'WE ARE',
    statement: 'OBSESSED',
    description:
      'With building systems that actually work. Every detail matters. Every workflow refined. Every frustration eliminated.',
    background: '/backgrounds/fiber-ribbons.png',
  },
  {
    leadIn: 'NO',
    statement: 'BLOATWARE',
    description:
      'Every feature earns its place. We strip away the noise, keep what works, and build exactly what your business needs.',
    background: '/backgrounds/particle-wave-1.png',
  },
  {
    leadIn: 'YOUR BUSINESS',
    statement: 'SIMPLIFIED',
    description:
      'One login. Everything you need. No more juggling between disconnected tools or hunting for information.',
    background: '/backgrounds/particle-wave-2.png',
  },
  {
    leadIn: 'CLARITY',
    statement: 'DELIVERED',
    description:
      'See your entire operation at a glance. Know what matters. Act with confidence.',
    background: '/backgrounds/fiber-ribbons.png',
  },
];

const ValuesSection = () => {
  return (
    <section className="relative">
      <ValuesCarousel slides={slides} autoPlayInterval={6000} />
    </section>
  );
};

export default ValuesSection;

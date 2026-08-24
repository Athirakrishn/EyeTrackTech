import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}

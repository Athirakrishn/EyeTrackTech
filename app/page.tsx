import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import HomeSecuritySolutions from '@/components/HomeSecuritySolutions';
import SupportSection from '@/components/SupportSection';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Stats />
      <HomeSecuritySolutions />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <SupportSection />
    </main>
  );
}

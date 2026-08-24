import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f2392c] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}

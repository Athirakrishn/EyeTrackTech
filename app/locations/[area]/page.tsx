import LocationHero from '@/components/LocationHero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import HomeSecuritySolutions from '@/components/HomeSecuritySolutions';
import SupportSection from '@/components/SupportSection';

export function generateStaticParams() {
  return [
    { area: 'vadakara' },
    { area: 'perambra' },
    { area: 'calicut' },
    { area: 'kannur' },
    { area: 'malappuram' },
  ];
}

export default async function LocationPage({ params }: { params: any }) {
  // Resolve params (works for both Next 14 object and Next 15+ promise)
  const resolvedParams = await Promise.resolve(params);
  const rawArea = resolvedParams.area || 'calicut';
  const areaName = rawArea.charAt(0).toUpperCase() + rawArea.slice(1);

  return (
    <main className="flex-grow">
      <LocationHero areaName={areaName} />
      <Stats />
      <HomeSecuritySolutions />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <SupportSection />
    </main>
  );
}

import type { Metadata } from 'next';
import LocationHero from '@/components/LocationHero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import HomeSecuritySolutions from '@/components/HomeSecuritySolutions';
import SupportSection from '@/components/SupportSection';
import { getLocationData, locationData } from '@/data/locations';

export function generateStaticParams() {
  return Object.keys(locationData).map((area) => ({
    area,
  }));
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const rawArea = resolvedParams?.area || 'calicut';
  const data = getLocationData(rawArea);

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `https://eyetrack-tech.com/locations/${data.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://eyetrack-tech.com/locations/${data.slug}`,
      siteName: "EYE TRACK SOLUTIONS PVT LTD",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: { params: any }) {
  // Resolve params (works for both Next 14 object and Next 15+ promise)
  const resolvedParams = await Promise.resolve(params);
  const rawArea = resolvedParams?.area || 'calicut';
  const data = getLocationData(rawArea);

  return (
    <main className="flex-grow">
      {/* Schema.org LocalBusiness Structured Data with area keywords and details */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.jsonLd) }}
      />
      <LocationHero areaName={data.name} />
      <Stats />
      <HomeSecuritySolutions />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <SupportSection />
    </main>
  );
}


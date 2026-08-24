import { Network } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function Page() {
  return (
    <ServicePageTemplate
      title="Network Cabling"
      description="Best best cctv installation in payyoli, We provide professional structured network cabling solutions for offices, Buildings, and homes."
      longDescription="Our team designs and installs secure data networks Using CAT6, and fiber optic cables to ensure fast and stable internet and Device connections. From planning to installation and testing, we deliver clean, efficient, and Long-lasting networking setups."
      Icon={Network}
      bgImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    />
  );
}
